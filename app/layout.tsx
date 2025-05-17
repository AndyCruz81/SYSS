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
  description: "Sistena de gestión empresarial",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              className:
                "backdrop-blur bg-white/80 dark:bg-zinc-900/80 rounded-lg",
              style: {
                background: "var(--foreground)",
                color: "var(--background)",
              },
            }}
          />

          <main className="h-screen min-h-screen w-screen flex flex-col overflow-hidden">
            <Navbar />

            <div className="flex flex-col overflow-hidden">
              {/* Children NO hace scroll aquí */}
              {children}
            </div>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
