import { createFileRoute } from "@tanstack/react-router";
import { PayrollWorkspace } from "@/features/payroll/components/PayrollWorkspace";

function FicheDePaiePage() {
  return <PayrollWorkspace page="payslip" />;
}

export const Route = createFileRoute("/payroll/fiche-de-paie")({ component: FicheDePaiePage });