import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function InventairePage() {
  return <Subpage title="Inventaire" subtitle="Contrôle et régularisation des stocks." />;
}

export const Route = createFileRoute("/stock/inventaire")({ component: InventairePage });
