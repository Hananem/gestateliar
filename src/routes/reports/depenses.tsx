import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function DepensesReportPage() {
  return <Subpage title="Dépenses" subtitle="Rapport des dépenses de l’atelier." />;
}

export const Route = createFileRoute("/reports/depenses")({ component: DepensesReportPage });
