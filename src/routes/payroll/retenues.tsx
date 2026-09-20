import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function RetenuesPage() {
  return <Subpage title="Retenues" subtitle="Gestion des retenues appliquées à la paie." />;
}

export const Route = createFileRoute("/payroll/retenues")({ component: RetenuesPage });
