import Link from "next/link"; // Navegación con enlaces Next.js
import { hasEnvVars } from "@/utils/supabase/check-env-vars"; // Verifica si están presentes las variables de entorno necesarias
import HeaderAuth from "@/app/auth/auth-componets/header-auth"; // Componente de autenticación en el encabezado
import { EnvVarWarning } from "./env-var-warning";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>SYSS</Link>
        </div>
        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
      </div>
    </nav>
  );
}
