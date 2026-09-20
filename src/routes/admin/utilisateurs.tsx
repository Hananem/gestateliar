import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function UtilisateursPage() {
  return <Subpage title="Utilisateurs" subtitle="Gestion des utilisateurs de l’application." />;
}

export const Route = createFileRoute("/admin/utilisateurs")({ component: UtilisateursPage });
