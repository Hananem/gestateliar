import { createFileRoute } from "@tanstack/react-router";
import { StockPage } from "@/features/stock/stock";

export const Route = createFileRoute("/stock")({ component: StockPage });