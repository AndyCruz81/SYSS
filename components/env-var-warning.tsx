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
      </div>
    </div>
  );
}
