import { createClient } from "@/utils/supabase/client";
// esta función se utiliza para obtener el estado de autenticación del usuario
// y se puede utilizar en cualquier parte de la aplicación
export async function getAuthState() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
