import { createFileRoute } from "@tanstack/react-router";
import { StockWorkspace } from "@/features/stock/components/StockWorkspace";

function RouleauxLotsPage() {
  return <StockWorkspace page="rolls" />;
}

export const Route = createFileRoute("/stock/rouleaux-lots")({ component: RouleauxLotsPage });
