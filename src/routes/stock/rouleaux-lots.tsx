import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function RouleauxLotsPage() {
  return <Subpage title="Rouleaux / Lots" subtitle="Suivi des rouleaux et des lots en stock." />;
}

export const Route = createFileRoute("/stock/rouleaux-lots")({ component: RouleauxLotsPage });
