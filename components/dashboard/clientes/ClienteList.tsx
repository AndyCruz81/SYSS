'use client';

import { Button } from "@/components/ui/button";
import { Cliente } from "@/types/cliente";

interface ClienteListProps {
  clientes: Cliente[];
  onEdit: (cliente: Cliente) => void;
  onDelete: (id: number) => void;
}

export function ClienteList({ clientes, onEdit, onDelete }: ClienteListProps) {
  return (
    <div className="space-y-2">
      {clientes.map((cliente) => (
        <div
          key={cliente.IdPersona}
          className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
        >
          <div>
            <p className="font-medium">
              {cliente.PrimerNombre} {cliente.SegundoNombre} {cliente.PrimerApellido} {cliente.SegundoApellido}
            </p>
            <p className="text-sm text-muted-foreground">{cliente.CorreoElectronico}</p>
            <p className="text-sm text-muted-foreground">{cliente.Identificacion}</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => onEdit(cliente)}
            >
              Editar
            </Button>
            <Button
              variant="destructive"
              onClick={() => cliente.IdPersona && onDelete(cliente.IdPersona)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
