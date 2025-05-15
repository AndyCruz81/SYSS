import React from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cn } from "@/lib/utils"; // si tenés el util para combinar clases
import { Button } from "@/components/ui/button";
import { Home, Users, BarChart2, MenuIcon } from "lucide-react"; // íconos de ejemplo

// Íconos mapeables (en base al nombre desde DB)
const iconMap: Record<string, React.ReactElement> = {
  dashboard: <Home size={16} />,
  clientes: <Users size={16} />,
  reportes: <BarChart2 size={16} />,
  menu: <MenuIcon size={16} />,
};

export default async function Menu() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("GLO_Menu")
    .select("*")
    .order("Orden", { ascending: true });

  if (error) {
    return (
      <div className="text-destructive text-sm">
        Error cargando el menú.
      </div>
    );
  }

  return (
    <nav className="flex flex-col gap-2">
      {data?.map((item) => (
        <Button
          key={item.IdMenu}
          variant="ghost"
          asChild
          className="justify-start gap-2 w-full text-left"
        >
          <Link href={item.Ruta}>
            {iconMap[item.Icono?.toLowerCase()] ?? iconMap["menu"]}
            <span>{item.Titulo}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
}
