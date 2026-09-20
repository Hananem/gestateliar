import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function DepensesPage() {
  return <Subpage title="Dépenses" subtitle="Suivi des dépenses de l’atelier." />;
}

export const Route = createFileRoute("/expenses/depenses")({ component: DepensesPage });
