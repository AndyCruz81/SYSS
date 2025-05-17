import Link from "next/link"; // Navegación con enlaces Next.js
import { hasEnvVars } from "@/utils/supabase/check-env-vars"; // Verifica si están presentes las variables de entorno necesarias
import HeaderAuth from "@/app/auth/auth-componets/header-auth"; // Componente de autenticación en el encabezado
import { EnvVarWarning } from "./env-var-warning";
import Logo from "./ui/logo";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-foreground/10 bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo + Marca */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Logo size={32} />
            <span className="font-semibold text-lg text-foreground hidden sm:inline">SYSS</span>
          </Link>
        </div>

        {/* Estado o Auth */}
        <div className="flex items-center gap-2 text-sm">
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
