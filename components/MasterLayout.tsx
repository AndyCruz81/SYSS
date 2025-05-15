import Menu from "./Menu";

export default async function MasterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Menú lateral */}
      <aside className="w-64 bg-zinc-900 text-white p-4">
        <Menu />
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-white dark:bg-background p-6">
        {children}
      </main>
    </div>
  );
}
