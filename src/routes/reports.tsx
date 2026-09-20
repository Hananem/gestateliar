import { createFileRoute } from "@tanstack/react-router";
import { ReportsPage } from "@/features/reports/reports";

export const Route = createFileRoute("/reports")({ component: ReportsPage });