import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function AvancesPage() {
  return <Subpage title="Avances" subtitle="Suivi des avances versées aux ouvriers." />;
}

export const Route = createFileRoute("/payroll/avances")({ component: AvancesPage });
