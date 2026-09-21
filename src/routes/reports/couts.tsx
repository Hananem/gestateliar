import { createFileRoute } from "@tanstack/react-router";
import { ExpensesWorkspace } from "@/features/expenses/components/ExpensesWorkspace";

function CoutsReportPage() {
  return <ExpensesWorkspace page="costs" />;
}

export const Route = createFileRoute("/reports/couts")({ component: CoutsReportPage });
