import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function ParametresPage() {
  return <Subpage title="Paramètres" subtitle="Configuration générale de l’application." />;
}

export const Route = createFileRoute("/admin/parametres")({ component: ParametresPage });
