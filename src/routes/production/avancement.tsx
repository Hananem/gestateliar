import { createFileRoute } from "@tanstack/react-router";
import { ProductionWorkspace } from "@/features/production/components/ProductionWorkspace";

function AvancementPage() {
  return <ProductionWorkspace page="progress" />;
}

export const Route = createFileRoute("/production/avancement")({ component: AvancementPage });