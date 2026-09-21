import { createFileRoute } from "@tanstack/react-router";
import { StockWorkspace } from "@/features/stock/components/StockWorkspace";

function InventairePage() {
  return <StockWorkspace page="inventory" />;
}

export const Route = createFileRoute("/stock/inventaire")({ component: InventairePage });
