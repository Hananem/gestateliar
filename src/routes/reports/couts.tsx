import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function CoutsReportPage() {
  return <Subpage title="Coûts" subtitle="Analyse des coûts de l’atelier." />;
}

export const Route = createFileRoute("/reports/couts")({ component: CoutsReportPage });
