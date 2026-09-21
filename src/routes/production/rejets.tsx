import { createFileRoute } from "@tanstack/react-router";
import { ProductionWorkspace } from "@/features/production/components/ProductionWorkspace";

function RejetsPage() {
  return <ProductionWorkspace page="rejects" />;
}

export const Route = createFileRoute("/production/rejets")({ component: RejetsPage });