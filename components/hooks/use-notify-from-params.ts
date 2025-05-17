"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { notify } from "@/components/ui/notify";

export function useNotifyFromParams(autoClear = true) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const error = searchParams.get("error");
  const success = searchParams.get("success");
  const message = searchParams.get("info");
  const warning = searchParams.get("warning");

  useEffect(() => {
    if (error) {
      notify({
        type: "error",
        title: "Error",
        description: decodeURIComponent(error),
      });
    }

    if (success) {
      notify({
        type: "success",
        title: "Éxito",
        description: decodeURIComponent(success),
      });
    }

    if (message && !error && !success) {
      notify({
        type: "info",
        title: "Mensaje",
        description: decodeURIComponent(message),
      });
    }

    // Limpia la URL si se desea
    if (autoClear && (error || success || message)) {
      router.replace(window.location.pathname, { scroll: false });
    }
  }, [error, success, message, autoClear, router]);
}
