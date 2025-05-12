// Importamos componentes necesarios
import Link from "next/link"; // Componente de Next.js para enlaces internos
import { TutorialStep } from "./tutorial-step"; // Componente personalizado para pasos del tutorial
import { ArrowUpRight } from "lucide-react"; // Icono de flecha (probablemente para enlaces externos)

// Componente principal que muestra los pasos de configuración
export default function SignUpUserSteps() {
  return (
    // Lista ordenada con espacio entre elementos
    <ol className="flex flex-col gap-6">
      
      {/* Si el entorno actual es "preview" o "production", mostramos este paso */}
      {process.env.VERCEL_ENV === "preview" ||
      process.env.VERCEL_ENV === "production" ? (
        
        <TutorialStep title="Configurar URLs de redirección">
          <p>Parece que esta aplicación está alojada en Vercel.</p>
          
          <p className="mt-4">
            Este despliegue específico está en el entorno
            <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
              "{process.env.VERCEL_ENV}"
            </span>{" "}
            en
            <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
              https://{process.env.VERCEL_URL}
            </span>
            .
          </p>

          <p className="mt-4">
            Necesitarás{" "}
            <Link
              className="text-primary hover:text-foreground"
              href={
                "https://supabase.com/dashboard/project/_/auth/url-configuration"
              }
            >
              actualizar tu proyecto de Supabase
            </Link>{" "}
            con las URLs de redirección basadas en tu URL de despliegue en Vercel.
          </p>

          {/* Lista de URLs sugeridas para redirección */}
          <ul className="mt-4">
            <li>
              -{" "}
              <span className="...">
                http://localhost:3000/**
              </span>
            </li>
            <li>
              -{" "}
              <span className="...">
                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/**`}
              </span>
            </li>
            <li>
              -{" "}
              <span className="...">
                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(".vercel.app", "")}-*-[vercel-team-url].vercel.app/**`}
              </span>{" "}
              (Puedes encontrar el URL de tu equipo en{" "}
              <Link
                className="text-primary hover:text-foreground"
                href="https://vercel.com/docs/accounts/create-a-team#find-your-team-id"
                target="_blank"
              >
                la configuración del equipo en Vercel
              </Link>
              )
            </li>
          </ul>

          {/* Enlace a la documentación de Supabase sobre redirecciones con Vercel */}
          <Link
            href="https://supabase.com/docs/guides/auth/redirect-urls#vercel-preview-urls"
            target="_blank"
            className="text-primary/50 hover:text-primary flex items-center text-sm gap-1 mt-4"
          >
            Ver documentación sobre URLs de redirección <ArrowUpRight size={14} />
          </Link>
        </TutorialStep>
      ) : null}

      {/* Segundo paso del tutorial: registrar el primer usuario */}
      <TutorialStep title="Registra tu primer usuario">
        <p>
          Ve a la página de{" "}
          <Link
            href="/sign-up"
            className="font-bold hover:underline text-foreground/80"
          >
            registro
          </Link>{" "}
          y registra tu primer usuario. No importa si solo eres tú por ahora.
          ¡Tu increíble idea tendrá muchos usuarios más adelante!
        </p>
      </TutorialStep>
    </ol>
  );
}
