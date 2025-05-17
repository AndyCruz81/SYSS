import Menu from "./Menu";

export default function MasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Menú lateral */}
      <aside className="w-64 bg-card border-r border-border p-4">
        <Menu />
      </aside>

      {/* Contenido principal con scroll */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
