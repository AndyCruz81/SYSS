// Esta página se carga automáticamente si el usuario intenta acceder a una ruta que no existe
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col text-center">
      {/* Título principal del mensaje */}
      <h1 className="text-4xl font-bold text-red-600">Página no encontrada</h1>

      {/* Texto explicativo */}
      <p className="mt-4 text-lg">
        La ruta que intentaste abrir no existe o fue movida.
      </p>
    </div>
  );
}
