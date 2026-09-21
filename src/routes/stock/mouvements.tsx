import { createFileRoute } from "@tanstack/react-router";
import { StockWorkspace } from "@/features/stock/components/StockWorkspace";

function MouvementsPage() {
  return <StockWorkspace page="movements" />;
}

export const Route = createFileRoute("/stock/mouvements")({ component: MouvementsPage });
