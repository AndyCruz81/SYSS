import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function EnvVarWarning() {
  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        Variables de entorno no configuradas 
      </Badge>
      <div className="flex gap-2">
        <Button
          asChild
          size="sm"
          variant={"outline"}
          className="opacity-75"
        >
          <Link href="./sign-in">Iniciar Sesión</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant={"default"}
          className="opacity-75"
        >
          <Link href="./sign-up">Crear Cuenta</Link>
        </Button>
      </div>
    </div>
  );
}
