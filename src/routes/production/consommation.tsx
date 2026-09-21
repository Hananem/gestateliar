import { createFileRoute } from "@tanstack/react-router";
import { ProductionWorkspace } from "@/features/production/components/ProductionWorkspace";

function ConsommationPage() {
  return <ProductionWorkspace page="consumption" />;
}

export const Route = createFileRoute("/production/consommation")({ component: ConsommationPage });