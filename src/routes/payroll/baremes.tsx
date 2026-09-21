import { createFileRoute } from "@tanstack/react-router";
import { PayrollWorkspace } from "@/features/payroll/components/PayrollWorkspace";

function BaremesPage() {
  return <PayrollWorkspace page="rates" />;
}

export const Route = createFileRoute("/payroll/baremes")({ component: BaremesPage });
