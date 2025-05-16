"use client";

import { use, useEffect, useState } from "react";
import { ClienteForm } from "@/components/dashboard/clientes/ClienteForm";
import { ClienteList } from "@/components/dashboard/clientes/ClienteList";
import { Cliente } from "@/types/cliente";
import { Button } from "@/components/ui/button";

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null);

  useEffect(() => {
    const getClientes = async () => {
      try {
        const res = await fetch("/api/clientes");
        const data = await res.json();
        setClientes(data);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
    };
    getClientes();
  }, []);

  const handleAddOrUpdate = (cliente: Cliente) => {
    if (cliente.IdPersona) {
      // Actualizar cliente existente
      setClientes((prev) =>
        prev.map((c) => (c.IdPersona === cliente.IdPersona ? cliente : c))
      );
    } else {
      // Crear cliente nuevo
      const nuevoCliente = {
        ...cliente,
        IdCliente: Date.now(), // ID temporal, idealmente generado por el backend
      };
      setClientes((prev) => [...prev, nuevoCliente]);
    }
    setEditingCliente(null);
  };

  const handleEdit = (cliente: Cliente) => {
    setEditingCliente(cliente);
  };

  const handleDelete = (id: number) => {
    setClientes((prev) => prev.filter((c) => c.IdPersona !== id));
    if (editingCliente?.IdPersona === id) {
      setEditingCliente(null);
    }
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
