'use client';

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { notify } from "@/components/ui/notify";
import Logo from "@/components/ui/logo";


export default function Home() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error al obtener usuario:", error.message);
        notify({
          type: "error",
          title: "Error de sesión",
          description: error.message,
        });
      }

      setUser(data?.user ?? null);
      setLoading(false);
    };

    fetchUser();
  }, []);

  // Mostrar loading mientras se valida sesión
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Verificando sesión...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Logo size={500} />
        <h1 className="text-xl mt-4">Iniciá sesión para continuar</h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Bienvenido, {user.email}</h1>



      <button
        onClick={() =>
          notify({
            type: 'success',
            title: 'Operación exitosa',
            description: 'Tu acción fue completada correctamente.',
          })
        }
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Probar notificación
      </button>
    </div>
  );
}
