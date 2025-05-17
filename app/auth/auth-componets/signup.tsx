"use client";

import { useState } from "react";
import Link from "next/link";
import { signUpAction } from "@/app/api/login/actions"; // Ajustá si está en otro path
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNotifyFromParams } from "@/components/hooks/use-notify-from-params";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  useNotifyFromParams(); // Muestra toasts automáticamente

  return (
    <form
      className="w-full max-w-md bg-white dark:bg-background border border-gray-200 dark:border-zinc-800 rounded-xl shadow-md p-8 flex flex-col gap-6"
      action={signUpAction}
    >
      {/* Encabezado */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Crear cuenta</h1>
        <p className="text-sm text-muted-foreground mt-2">
          ¿Ya tenés una cuenta?{" "}
          <Link
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="/auth/sign-in"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Correo electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            id="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            required
            autoComplete="email"
            className="pl-10"
          />
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="password">Contraseña</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            minLength={6}
            required
            autoComplete="new-password"
            className="pl-10 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Mostrar u ocultar contraseña"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Botón */}
      <div className="flex flex-col gap-3">
        <SubmitButton pendingText="Registrando cuenta...">
          Registrarse
        </SubmitButton>
      </div>
    </form>
  );
}
