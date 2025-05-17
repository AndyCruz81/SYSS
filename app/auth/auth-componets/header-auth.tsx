"use client";

import { useState, useEffect } from "react";
import { signOutAction } from "@/app/api/login/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import { getAuthState } from "@/app/api/login/auth-state"; 
import { User } from "@supabase/supabase-js"; // Asegúrate de importar `User`

export default function AuthButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // ✅ Define el tipo correct

  useEffect(() => {
    async function fetchUser() {
      const userData = await getAuthState();
      setUser(userData);
    }
    fetchUser();
  }, []);

  if (!hasEnvVars) {
    return (
      <Badge variant="default" className="font-normal pointer-events-none">
        Por favor, actualiza el archivo .env.local con la clave anon y la url
      </Badge>
    );
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden p-2 border border-foreground/20 rounded-md"
      >
        ☰
      </Button>

      <div
        className={cn(
          "flex gap-2",
          menuOpen ? "flex flex-col absolute top-10 right-4 bg-background rounded-md shadow-lg p-4 w-[200px]" : "hidden sm:flex"
        )}
      >
        {user ? (
          <div className="flex items-center gap-4">
            <span>Hola, {user?.email && <span>{user.email}</span>}</span>
            <form action={signOutAction}>
              <Button type="submit" variant="outline">Cerrar sesión</Button>
            </form>
          </div>
        ) : (
          <>
            <Button asChild size="sm" variant="outline">
              <Link href="/auth/sign-in">Iniciar Sesión</Link>
            </Button>
            <Button asChild size="sm" variant="default">
              <Link href="/auth/sign-up">Crear Cuenta</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
