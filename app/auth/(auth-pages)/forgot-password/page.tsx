"use client"; // 👈 Importante para usar hooks en Next.js App Router

import { forgotPasswordAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // ✅ Usa el hook correcto
import { SmtpMessage } from "../smtp-message";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  const searchParams = useSearchParams();

  // Extrae los valores de `searchParams`
  const success = searchParams.get("success");
  const error = searchParams.get("error");
  const message = searchParams.get("message");

  // Si hay mensaje de estado, solo muestra el mensaje sin formulario
  if (message || success || error) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        {success && <FormMessage message={{ success }} />}
        {error && <FormMessage message={{ error }} />}
        {message && <FormMessage message={{ message }} />}
      </div>
    );
  }

  return (
    <form className="w-full max-w-md bg-white dark:bg-background border border-gray-200 dark:border-zinc-800 rounded-xl shadow-md p-8 flex flex-col gap-6">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">Restablecer contraseña</h1>
        <p className="text-sm text-muted-foreground mt-2">
          ¿Ya tienes una cuenta?{" "}
          <Link className="text-blue-600 dark:text-blue-400 hover:underline" href="/auth/sign-in">
            Iniciar sesión
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

      {/* Botón y mensaje */}
      <div className="flex flex-col gap-3">
        <SubmitButton pendingText="Restableciendo..." formAction={forgotPasswordAction}>
          Restablecer contraseña
        </SubmitButton>

        {/* ✅ Muestra los mensajes correctamente */}
        {success && <FormMessage message={{ success }} />}
        {error && <FormMessage message={{ error }} />}
        {message && <FormMessage message={{ message }} />}
      </div>

      {/* <SmtpMessage /> */}
    </form>
  );
}
