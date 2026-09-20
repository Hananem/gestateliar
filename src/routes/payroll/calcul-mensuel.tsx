import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function CalculMensuelPage() {
  return <Subpage title="Calcul mensuel" subtitle="Calcul et préparation de la paie mensuelle." />;
}

export const Route = createFileRoute("/payroll/calcul-mensuel")({ component: CalculMensuelPage });
