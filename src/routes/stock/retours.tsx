import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function RetoursPage() {
  return <Subpage title="Retours" subtitle="Gestion des retours de matières et d’articles." />;
}

export const Route = createFileRoute("/stock/retours")({ component: RetoursPage });
