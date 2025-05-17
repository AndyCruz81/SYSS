import { notify } from "@/components/ui/notify";

export function SmtpMessage() {
  return notify({
    type: "error",
    title: "Fallo con el envío de correos electrónicos",
    description: "Habilita SMTP personalizado para aumentar el límite de envío de correos electrónicos. https://supabase.com/docs/guides/auth/auth-smtp",
  });

  // <div className="bg-muted/50 px-5 py-3 border rounded-md flex gap-4">
  //   <InfoIcon size={16} className="mt-0.5" />
  //   <div className="flex flex-col gap-1">
  //     <small className="text-sm text-secondary-foreground">
  //       <strong> Nota:</strong> Los correos electrónicos tienen un límite de envío. Habilita SMTP personalizado para aumentar el límite.
  //     </small>
  //     <div>
  //       <Link
  //         href="https://supabase.com/docs/guides/auth/auth-smtp"
  //         target="_blank"
  //         className="text-primary/50 hover:text-primary flex items-center text-sm gap-1"
  //       >
  //         Learn more <ArrowUpRight size={14} />
  //       </Link>
  //     </div>
  //   </div>
  // </div>
}
