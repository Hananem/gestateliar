import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function MouvementsPage() {
  return <Subpage title="Mouvements" subtitle="Historique des mouvements de stock." />;
}

export const Route = createFileRoute("/stock/mouvements")({ component: MouvementsPage });
