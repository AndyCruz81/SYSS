"use client";

import { useEffect, useState } from "react";
import { ClienteForm } from "@/components/dashboard/clientes/ClienteForm";
import { ClienteList } from "@/components/dashboard/clientes/ClienteList";
import { Cliente } from "@/types/cliente";
import { Button } from "@/components/ui/button";

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null);

  const fetchClientes = async () => {
    try {
      const res = await fetch("/api/clientes");
      const data = await res.json();
      setClientes(data);
    } catch (err) {
      console.error("Error al cargar datos de clientes:", err);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  
  
  const handleAddOrUpdate = async (cliente: Cliente) => {
    const method = cliente.IdPersona ? "PUT" : "POST";
    const url = cliente.IdPersona
      ? `/api/clientes/${cliente.IdPersona}`
      : "/api/clientes";

    const createCliente:  Partial<Cliente> = { ...cliente };

    if (!cliente.IdPersona) {
      delete createCliente.IdPersona;
    }

    if (!cliente.FechaCreacion || cliente.FechaCreacion.trim() === "") {
      createCliente.FechaCreacion = new Date().toISOString().split('T')[0]; 
    }

    console.log(url);

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createCliente),
    });

    if (!res.ok) {
      return;
    }
  
    fetchClientes();
    setEditingCliente(null);
  };
  
  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/clientes/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      console.error("Error eliminando cliente");
      return;
    }
  
    fetchClientes();
    if (editingCliente?.IdPersona === id) setEditingCliente(null);
  };
  
  const handleEdit = (cliente: Cliente) => {
    setEditingCliente(cliente);
  };

  const handleCancel = () => {
    setEditingCliente(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">Gestión de Clientes</h1>

      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">
          {editingCliente ? "Editar Cliente" : "Nuevo Cliente"}
        </h2>
        <ClienteForm
          initialData={editingCliente || undefined}
          onSubmit={handleAddOrUpdate}
        />
        {editingCliente && (
          <Button variant="ghost" className="mt-2" onClick={handleCancel}>
            Cancelar edición
          </Button>
        )}
      </div>

      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Lista de Clientes</h2>
        <ClienteList
          clientes={clientes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
