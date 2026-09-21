import { createFileRoute } from "@tanstack/react-router";
import { PayrollWorkspace } from "@/features/payroll/components/PayrollWorkspace";

function PrimesPage() {
  return <PayrollWorkspace page="bonuses" />;
}

export const Route = createFileRoute("/payroll/primes")({ component: PrimesPage });
