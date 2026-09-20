import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function ProductiviteReportPage() {
  return <Subpage title="Productivité" subtitle="Rapport de productivité de l’équipe." />;
}

export const Route = createFileRoute("/reports/productivite")({ component: ProductiviteReportPage });
