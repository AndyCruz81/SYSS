import Navbar from "@/components/nabvar"; // Componente de navegación 
import Footer from "@/components/footer"; // Componente de pie de página
import { Geist } from "next/font/google"; // Tipografía "Geist" desde Google Fonts
import { ThemeProvider } from "next-themes"; // Permite cambiar tema (claro/oscuro)
import { Toaster } from "sonner";
import Logo from "@/components/ui/logo"; // Componente de logo

import "./globals.css"; // Importa estilos globales CSS

const defaultUrl = process.env.VERCEL_URL // Determina la URL base del sitio según si está en Vercel o en desarrollo local.
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SYSS",
  description: "Sistena de gestión empresarial"
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> {/* Modo oscuro | Modo claro */}

          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              className: "backdrop-blur bg-white/80 dark:bg-zinc-900/80 rounded-lg",
              style: {
                background: "var(--foreground)",
                color: "var(--background)",
              },
            }}
          />

          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <Navbar />

              <div className="flex flex-col gap-20 max-w-5xl p-5 min-h-[400px] justify-center items-center">
                {children}
              </div>

              <Footer />

            </div>
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
