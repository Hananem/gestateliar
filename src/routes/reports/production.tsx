import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function ProductionReportPage() {
  return <Subpage title="Production" subtitle="Rapport de production de l’atelier." />;
}

export const Route = createFileRoute("/reports/production")({ component: ProductionReportPage });
