'use client';

import { signInAction } from "@/app/api/login/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNotifyFromParams } from "@/components/hooks/use-notify-from-params";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
  useNotifyFromParams(); // Lanza notificaciones desde searchParams (error, success...)

  return (
    <form
      className="w-full max-w-md bg-white dark:bg-background border border-border rounded-xl shadow-md p-8 flex flex-col gap-6"
      action={signInAction}
    >
      {/* Título */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Iniciar sesión</h1>
        <p className="text-sm text-muted-foreground mt-2">
          ¿No tenés cuenta?{" "}
          <Link
            href="/auth/sign-up"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Crear cuenta
          </Link>
        </p>
      </div>

      {/* Campo Email */}
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

      {/* Campo Password */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Contraseña</Label>
          <Link
            href="/auth/forgot-password"
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            autoComplete="current-password"
            className="pl-10"
          />
        </div>
      </div>

      {/* Botón de envío */}
      <div>
        <SubmitButton pendingText="Iniciando sesión...">Iniciar sesión</SubmitButton>
      </div>
    </form>
  );
}
