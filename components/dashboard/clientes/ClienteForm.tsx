'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Cliente {
  id?: number;
  nombre: string;
  email: string;
}

interface ClienteFormProps {
  initialData?: Cliente;
  onSubmit: (cliente: Cliente) => void;
}

export function ClienteForm({ initialData, onSubmit }: ClienteFormProps) {
  const [nombre, setNombre] = useState(initialData?.nombre || '');
  const [email, setEmail] = useState(initialData?.email || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id, nombre, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium text-sm">Nombre</label>
        <Input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Juan Pérez" />
      </div>

      <div>
        <label className="block mb-1 font-medium text-sm">Email</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="juan@mail.com" />
      </div>

      <Button type="submit">
        {initialData ? 'Actualizar Cliente' : 'Crear Cliente'}
      </Button>
    </form>
  );
}
