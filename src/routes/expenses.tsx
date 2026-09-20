import { createFileRoute } from "@tanstack/react-router";
import { ExpensesPage } from "@/features/expenses/expenses";

export const Route = createFileRoute("/expenses")({ component: ExpensesPage });