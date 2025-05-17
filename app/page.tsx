"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Logo from "@/components/ui/logo";
import LoaderMessage from "@/components/ui/loader-message";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        setUser(null);
      } else {
        setUser(data.user);
      }

      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return <LoaderMessage message="Verificando sesión..." />;
  }

  if (!user) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <Logo size={180} />
          <span className="mt-1 text-xl italic font-serif text-gray-700">
            Smart Your Strategic System
          </span>
        </div>
        {/* <DropdownMenu> 
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Opción 1</DropdownMenuItem>
          <DropdownMenuItem>Opción 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>    */}
      </>
    );
  }
  return (
    <div className="w-full max-w-4xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Bienvenido, {user.email}</h1>
      <p className="text-muted-foreground">Este es tu dashboard principal</p>
    </div>
  );
}
