'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cliente } from "@/types/cliente";

interface ClienteFormProps {
  initialData?: Cliente;
  onSubmit: (cliente: Cliente) => void;
}

export function ClienteForm({ initialData, onSubmit }: ClienteFormProps) {
  const [formData, setFormData] = useState<Cliente>({
    IdPersona: initialData?.IdPersona || 0,
    IdTipoPersona: initialData?.IdTipoPersona || 1,
    PrimerNombre: initialData?.PrimerNombre || '',
    SegundoNombre: initialData?.SegundoNombre || '',
    PrimerApellido: initialData?.PrimerApellido || '',
    SegundoApellido: initialData?.SegundoApellido || '',
    IdGenero: initialData?.IdGenero || 1,
    IdEstadoCivil: initialData?.IdEstadoCivil || 1,
    FechaNacimiento: initialData?.FechaNacimiento || '',
    IdNacionalidad: initialData?.IdNacionalidad || 1,
    Identificacion: initialData?.Identificacion || '',
    IdTipoDocumento: initialData?.IdTipoDocumento || 1,
    CorreoElectronico: initialData?.CorreoElectronico || '',
    Telefono: initialData?.Telefono || '',
    FechaCreacion: initialData?.FechaCreacion || '',
    UsuarioCreacion: initialData?.UsuarioCreacion || 1,
  });

  const handleChange = (field: keyof Cliente, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Primer Nombre"
          value={formData.PrimerNombre}
          onChange={(e) => handleChange("PrimerNombre", e.target.value)}
        />
        <Input
          placeholder="Segundo Nombre"
          value={formData.SegundoNombre || ''}
          onChange={(e) => handleChange("SegundoNombre", e.target.value)}
        />
        <Input
          placeholder="Primer Apellido"
          value={formData.PrimerApellido}
          onChange={(e) => handleChange("PrimerApellido", e.target.value)}
        />
        <Input
          placeholder="Segundo Apellido"
          value={formData.SegundoApellido || ''}
          onChange={(e) => handleChange("SegundoApellido", e.target.value)}
        />
        <Input
          placeholder="Identificación"
          value={formData.Identificacion}
          onChange={(e) => handleChange("Identificacion", e.target.value)}
        />
        <Input
          placeholder="Correo Electrónico"
          type="email"
          value={formData.CorreoElectronico}
          onChange={(e) => handleChange("CorreoElectronico", e.target.value)}
        />
        <Input
          placeholder="Teléfono"
          value={formData.Telefono}
          onChange={(e) => handleChange("Telefono", e.target.value)}
        />
        <Input
          placeholder="Fecha de Nacimiento"
          type="date"
          value={formData.FechaNacimiento}
          onChange={(e) => handleChange("FechaNacimiento", e.target.value)}
        />
      </div>

      <Button type="submit">
        {initialData ? "Actualizar Cliente" : "Crear Cliente"}
      </Button>
    </form>
  );
}
