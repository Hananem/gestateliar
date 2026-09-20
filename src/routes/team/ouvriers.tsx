import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function OuvriersPage() {
  return <Subpage title="Ouvriers" subtitle="Gestion des ouvriers de l’atelier." />;
}

export const Route = createFileRoute("/team/ouvriers")({ component: OuvriersPage });
