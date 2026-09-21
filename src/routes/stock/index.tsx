import { createFileRoute } from "@tanstack/react-router";
import { StockWorkspace } from "@/features/stock/components/StockWorkspace";

function StockIndexPage() {
  return <StockWorkspace page="overview" />;
}

export const Route = createFileRoute("/stock/")({ component: StockIndexPage });