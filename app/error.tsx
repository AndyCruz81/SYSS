'use client'; // Obligatorio para que Next.js permita usar hooks como useEffect aquí

import { useEffect } from 'react';

// Este componente recibe:
// - `error`: el objeto del error que ocurrió
// - `reset`: función para reintentar la carga del componente que falló
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // Muestra el error en la consola del navegador (útil para debugging)
  useEffect(() => {
    console.error('ERROR CAPTURADO:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Título visible al usuario */}
      <h1 className="text-4xl font-bold text-red-700">¡Algo salió mal!</h1>

      {/* Mensaje de error técnico */}
      <p className="mt-4 text-lg text-gray-700">
        {error.message}
      </p>

      {/* Botón para intentar de nuevo (reinicia el componente que falló) */}
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
