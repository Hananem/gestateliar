import { createFileRoute } from "@tanstack/react-router";
import { ReportsWorkspace } from "@/features/reports/components/ReportsWorkspace";

function StockReportPage() {
  return <ReportsWorkspace page="stock" />;
}

export const Route = createFileRoute("/reports/stock")({ component: StockReportPage });
