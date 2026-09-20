import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function PaieReportPage() {
  return <Subpage title="Paie" subtitle="Rapport des éléments de paie." />;
}

export const Route = createFileRoute("/reports/paie")({ component: PaieReportPage });
