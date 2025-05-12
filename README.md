# SYSS - Sistema Web de Gestión Empresarial

Este proyecto es una aplicación web desarrollada con **Next.js 13+** usando la nueva estructura de rutas con la carpeta `app`, diseñada para gestionar autenticaciones, rutas protegidas y componentes reutilizables.

## 🧰 Tecnologías

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Node.js](https://nodejs.org/)
- [Vercel](https://vercel.com/) (opcional para despliegue)

## 🗂️ Estructura del Proyecto
/app
├── (auth-pages) # Rutas específicas para login, registro, etc.
├── auth # Lógica de autenticación
├── protected # Rutas protegidas por autenticación
├── layout.tsx # Layout general de la aplicación
├── page.tsx # Página raíz
├── globals.css # Estilos globales
/components # Componentes reutilizables
/lib # Librerías auxiliares o configuraciones
/utils # Funciones utilitarias
.env # Variables de entorno

## ⚙️ Configuración de supabase
## Acá tenemos la conexión con el proyecto SYSS de supabase
.env: 
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
JWT_SECRET=tu_clave_secreta

## 🚀 Scripts útiles para levantarlo localmente

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Crear build de producción
#npm run build

# Ejecutar en producción
#npm start