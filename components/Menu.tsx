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
    .eq("Estado", true)
    .order("Orden", { ascending: true });

  if (error) {
    console.error("Error al cargar menú:", error.message);
    return <div>Error cargando menú.</div>;
  }

  if (!data || data.length === 0) {
    return <div>Menú vacío.</div>;
  }

  return (
  <nav className="flex flex-col gap-2">
    {data.map((item) => (
      <Link
        href={item.Ruta}
        key={item.IdMenu}
        className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-150"
      >
        {item.Titulo}
      </Link>
    ))}
  </nav>
);
}
