import { createFileRoute } from "@tanstack/react-router";
import { PayrollPage } from "@/features/payroll/payroll";

export const Route = createFileRoute("/payroll")({ component: PayrollPage });