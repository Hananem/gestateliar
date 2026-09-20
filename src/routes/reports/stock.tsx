import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function StockReportPage() {
  return <Subpage title="Stock" subtitle="Rapport de stock et de disponibilité." />;
}

export const Route = createFileRoute("/reports/stock")({ component: StockReportPage });
