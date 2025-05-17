"use client";

import { useNotifyFromParams } from "@/components/hooks/use-notify-from-params";

export default function DashboardPage() {
  useNotifyFromParams(); // ✅ Detecta ?success o ?error y lanza notify()

  return <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>;
}
