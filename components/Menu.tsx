"use client";

import Link from "next/link";
import { useMenus } from "@/components/hooks/useMenus";

export default function Menu() {
  const { menus, loading } = useMenus();

  if (loading) {
    return <p className="text-sm text-muted">Cargando menú...</p>;
  }

  return (
    <nav className="flex flex-col gap-6">
      {menus.map((menu) => (
        <div key={menu.IdMenu}>
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            {menu.Icono && (
              <span
                className="inline-block"
                dangerouslySetInnerHTML={{ __html: menu.Icono }}
              />
            )}
            {menu.Titulo}
          </div>

          <ul className="ml-4 mt-2 space-y-1">
            {menu.SubMenus?.filter((s) => s.Estado).map((item) => (
              <li key={item.IdSubMenu}>
                <Link
                  href={item.Ruta}
                  className="block px-2 py-1 rounded hover:bg-muted text-sm"
                >
                  {item.Titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
