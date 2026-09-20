import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function ReceptionsPage() {
  return <Subpage title="Réceptions" subtitle="Enregistrement et suivi des réceptions." />;
}

export const Route = createFileRoute("/stock/receptions")({ component: ReceptionsPage });
