import { createFileRoute } from "@tanstack/react-router";
import { ProductionPage } from "@/features/production/production";

export const Route = createFileRoute("/production")({ component: ProductionPage });