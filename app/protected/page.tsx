import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">

      {/***Notificacion 
        <div className="w-full">
         <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          mensaje a notificar al usuario
          user
        </div>
      </div> */}

      <div className="flex justify-center items-center mt-8 mb-4">
        <img
          src="/img/SYSS.png"
          alt="SYSS company logo in blue and white, stylized text SYSS centered on a clean background, conveying a professional and modern tone"
          className="h-24 w-auto"
        />
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4">Hola, ya estas dentro..</h2>
        {/* <FetchDataSteps /> **Ejemplos de Consultas a supabase*/}
      </div>



    </div>
  );
}
