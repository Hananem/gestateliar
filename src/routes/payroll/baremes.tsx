import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function BaremesPage() {
  return <Subpage title="Barèmes" subtitle="Gestion des barèmes de rémunération." />;
}

export const Route = createFileRoute("/payroll/baremes")({ component: BaremesPage });
