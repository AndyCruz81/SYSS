import { signOutAction } from "@/app/auth/(auth-pages)/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Porfavor actualiza el archivo .env.local con la clave anon y la url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/auth/sign-in">Iniciar Sesion</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/auth/sign-up">Crear Cuenta</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    console.log(user),
    <div className="flex items-center gap-4">
      Hola, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Cerrar sesión
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/sign-in">Iniciar Sesión</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Crear Cuenta</Link>
      </Button>
    </div>
  );
}
