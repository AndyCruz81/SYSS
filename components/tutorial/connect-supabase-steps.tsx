// Importa el componente TutorialStep que se usará para mostrar los pasos
import { TutorialStep } from "./tutorial-step";

// Exporta el componente funcional ConnectSupabaseSteps
export default function ConnectSupabaseSteps() {
  return (
    // Crea una lista ordenada con los pasos, con un espacio vertical entre ellos
    <ol className="flex flex-col gap-6">
      
      {/* Paso 1: Crear un proyecto en Supabase */}
      <TutorialStep title="Crear proyecto en Supabase">
        <p>
          Dirígete a{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold hover:underline text-foreground/80"
            rel="noreferrer"
          >
            database.new
          </a>{" "}
          y crea un nuevo proyecto en Supabase.
        </p>
      </TutorialStep>

      {/* Paso 2: Declarar variables de entorno */}
      <TutorialStep title="Declarar variables de entorno">
        <p>
          Renombra el archivo{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            .env.example
          </span>{" "}
          en tu aplicación Next.js a{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            .env.local
          </span>{" "}
          y complétalo con los valores de{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold hover:underline text-foreground/80"
            rel="noreferrer"
          >
            la configuración de API de tu proyecto en Supabase
          </a>
          .
        </p>
      </TutorialStep>

      {/* Paso 3: Reiniciar el servidor de desarrollo */}
      <TutorialStep title="Reinicia tu servidor de desarrollo de Next.js">
        <p>
          Es posible que debas cerrar tu servidor de desarrollo de Next.js y ejecutar{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            npm run dev
          </span>{" "}
          nuevamente para cargar las nuevas variables de entorno.
        </p>
      </TutorialStep>

      {/* Paso 4: Refrescar la página */}
      <TutorialStep title="Refresca la página">
        <p>
          Puede que necesites refrescar la página para que Next.js cargue las nuevas variables de entorno.
        </p>
      </TutorialStep>
    </ol>
  );
}
