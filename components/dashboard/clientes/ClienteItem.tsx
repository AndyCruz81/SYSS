import { Button } from "@/components/ui/button";

interface Cliente {
  id: number;
  nombre: string;
  email: string;
}

interface Props {
  cliente: Cliente;
  onEdit: (cliente: Cliente) => void;
  onDelete: (id: number) => void;
}

export function ClienteItem({ cliente, onEdit, onDelete }: Props) {
  return (
    <div className="border rounded-md p-4 flex justify-between items-center">
      <div>
        <p className="font-semibold">{cliente.nombre}</p>
        <p className="text-sm text-muted-foreground">{cliente.email}</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => onEdit(cliente)}>Editar</Button>
        <Button variant="destructive" onClick={() => onDelete(cliente.id)}>Eliminar</Button>
      </div>
    </div>
  );
}