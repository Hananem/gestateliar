import { createFileRoute } from "@tanstack/react-router";
import { StockWorkspace } from "@/features/stock/components/StockWorkspace";

function RetoursPage() {
  return <StockWorkspace page="returns" />;
}

export const Route = createFileRoute("/stock/retours")({ component: RetoursPage });
