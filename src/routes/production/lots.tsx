import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function ProductionLotsPage() {
  return <Subpage title="Lots de production" subtitle="Suivi des lots en cours de production." />;
}

export const Route = createFileRoute("/production/lots")({ component: ProductionLotsPage });
