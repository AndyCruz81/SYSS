import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Esta función crea un cliente de Supabase usando las cookies del request (para manejar sesiones)
export const createClient = async () => {
  // Validación: asegúrate de que las variables de entorno estén definidas
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    // Lanzamos un error si faltan variables (esto será atrapado por error.tsx)
    throw new Error(
      "❌ Supabase no está configurado correctamente. Asegúrate de definir NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en tu archivo .env"
    );
  }

  // Obtenemos el store de cookies del request actual con `await`
  const cookieStore = await cookies(); // 🔄 Ahora sí se resuelve la promesa

  // Creamos el cliente con manejo de cookies personalizado
  return createServerClient(url, anonKey, {
    cookies: {
      async getAll() {
        return cookieStore.getAll(); // ✅ `await` garantiza que esté resuelto antes de acceder
      },
      async setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch (error) {
          // ⚠️ Esto se ignora porque `set` falla en Server Components
          // Pero no afecta si usás middleware para renovar sesiones
        }
      },
    },
  });
};
