import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function TravailPage() {
  return <Subpage title="Travail" subtitle="Suivi du travail réalisé par l’équipe." />;
}

export const Route = createFileRoute("/team/travail")({ component: TravailPage });
