import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function DepensesRecurrentesPage() {
  return <Subpage title="Dépenses récurrentes" subtitle="Gestion des dépenses récurrentes." />;
}

export const Route = createFileRoute("/expenses/depenses-recurrentes")({ component: DepensesRecurrentesPage });
