import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function SortiesPage() {
  return <Subpage title="Sorties" subtitle="Suivi des sorties de matières et d’articles." />;
}

export const Route = createFileRoute("/stock/sorties")({ component: SortiesPage });
