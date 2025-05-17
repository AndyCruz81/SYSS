"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/auth/sign-up",
      "El correo electrónico y la contraseña son obligatorios."
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/auth/sign-up", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/auth/sign-up",
      "¡Gracias por registrarte! Por favor, revisa tu correo electrónico para encontrar el enlace de verificación."
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/auth/sign-in", error.message);
  }

  return encodedRedirect(
    "success",
    "/dashboard",
    `¡Hola de nuevo, ${email}! Has iniciado sesión correctamente.`
  );
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect(
      "error",
      "@/app/auth/auth-pages/forgot-password",
      "correo electrónico es obligatorio."
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=@/app/auth/auth-pages/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "@/app/auth/auth-pages/forgot-password",
      "No se pudo restablecer la contraseña."
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "@/app/auth/auth-pages/forgot-password",
    "Revisa tu correo electrónico para encontrar el enlace de restablecimiento de contraseña."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "@/app/auth/auth-pages/reset-password",
      "La contraseña y la confirmación de contraseña son obligatorias."
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "@/app/auth/auth-pages/reset-password",
      "Las contraseñas no coinciden."
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "@/app/auth/auth-pages/reset-password",
      "La actualización de la contraseña falló."
    );
  }

  encodedRedirect(
    "success",
    "@/app/auth/auth-pages/reset-password",
    "Contraseña actualizada con éxito."
  );
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();

  return encodedRedirect(
    "success",
    "/auth/sign-in",
    "Sesión cerrada correctamente. ¡Vuelve pronto!"
  );
};
