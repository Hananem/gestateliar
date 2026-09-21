import { createFileRoute } from "@tanstack/react-router";
import { PayrollWorkspace } from "@/features/payroll/components/PayrollWorkspace";

function CalculMensuelPage() {
  return <PayrollWorkspace page="monthly" />;
}

export const Route = createFileRoute("/payroll/calcul-mensuel")({ component: CalculMensuelPage });
