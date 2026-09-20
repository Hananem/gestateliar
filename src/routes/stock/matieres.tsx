import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function MatieresPage() {
  return <Subpage title="Matières" subtitle="Gestion des matières premières de l’atelier." />;
}

export const Route = createFileRoute("/stock/matieres")({ component: MatieresPage });
