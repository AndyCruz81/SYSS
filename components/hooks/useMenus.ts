"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

// ✅ Submenu con campos reales
export interface SubMenu {
  IdSubMenu: number;
  IdMenu: number;
  Titulo: string;
  Ruta: string;
  Icono: string;
  Orden: number;
  Estado: boolean;
}

// ✅ Menu con campos reales
export interface Menu {
  IdMenu: number;
  IdEmpresa: string;
  Titulo: string;
  Ruta: string;
  Icono: string;
  Orden: number;
  Estado: boolean;
  SubMenus: SubMenu[];
}

export function useMenus() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("GLO_Menu")
        .select(
          `
    IdMenu,
    IdEmpresa,
    Titulo,
    Ruta,
    Icono,
    Orden,
    Estado,
    SubMenus:GLO_SubMenu (
      IdSubMenu,
      IdMenu,
      Titulo,
      Ruta,
      Icono,
      Orden,
      Estado
    )
  `
        )
        .order("Orden", { ascending: true }) // ✅ Ordena menús
        .order("IdMenu", { referencedTable: "GLO_SubMenu", ascending: true }); // ✅ Ordena submenús

      if (error) {
        console.error("Error cargando menús:", error.message);
      } else {
        setMenus(data || []);
      }

      setLoading(false);
    };

    fetchMenus();
  }, []);

  return { menus, loading };
}
