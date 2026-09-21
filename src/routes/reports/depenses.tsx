import { createFileRoute } from "@tanstack/react-router";
import { ExpensesWorkspace } from "@/features/expenses/components/ExpensesWorkspace";

function DepensesReportPage() {
  return <ExpensesWorkspace page="report" />;
}

export const Route = createFileRoute("/reports/depenses")({ component: DepensesReportPage });
