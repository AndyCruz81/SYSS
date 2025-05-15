"use client"; // 👈 Importante para usar hooks en Next.js App Router

import { signInAction } from "@/app/auth/(auth-pages)/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // ✅ Importa el hook correcto

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams(); // ✅ Usa el hook para acceder a `searchParams` de forma segura

  // Extrae los parámetros de búsqueda correctamente
  const success = searchParams.get("success");
  const error = searchParams.get("error");
  const message = searchParams.get("message");

  return (
    <form className="w-full max-w-md bg-white dark:bg-background border border-gray-200 dark:border-zinc-800 rounded-xl shadow-md p-8 flex flex-col gap-6">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Inicio de Sesión</h1>
        <p className="text-sm text-muted-foreground mt-2">
          ¿No tienes una cuenta?{" "}
          <Link
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="/auth/sign-up"
          >
            Crear cuenta
          </Link>
        </p>
      </div>

      {/* Campo de Email */}
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

      {/* Campo de Password con botón de mostrar */}
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
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="••••••••"
            required
            autoComplete="current-password"
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

      {/* Botón y mensaje */}
      <div className="flex flex-col gap-3">
        <SubmitButton pendingText="Iniciando sesión..." formAction={signInAction}>
          Iniciar sesión
        </SubmitButton>
        
        {/* ✅ Muestra los mensajes correctamente */}
        {success && <FormMessage message={{ success }} />}
        {error && <FormMessage message={{ error }} />}
        {message && <FormMessage message={{ message }} />}
      </div>
    </form>
  );
}
