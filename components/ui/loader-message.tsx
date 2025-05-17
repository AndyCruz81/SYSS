'use client';
// Permite crear un componente de carga con un mensaje opcional y un tamaño de icono personalizable.
// Este componente es útil para mostrar un estado de carga en la interfaz de usuario.
import { Loader2 } from "lucide-react";

interface LoaderMessageProps {
  message?: string;
  iconSize?: number;
  className?: string;
}

export default function LoaderMessage({
  message = "Cargando...",
  iconSize = 24,
  className = "",
}: LoaderMessageProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 py-6 ${className}`}>
      <Loader2 className="animate-spin text-muted-foreground" size={iconSize} />
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
}
