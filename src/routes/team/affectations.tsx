import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function AffectationsPage() {
  return <Subpage title="Affectations" subtitle="Affectation des ouvriers aux activités." />;
}

export const Route = createFileRoute("/team/affectations")({ component: AffectationsPage });
