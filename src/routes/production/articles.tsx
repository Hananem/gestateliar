import { createFileRoute } from "@tanstack/react-router";
import { ProductionWorkspace } from "@/features/production/components/ProductionWorkspace";

function ArticlesPage() {
  return <ProductionWorkspace page="articles" />;
}

export const Route = createFileRoute("/production/articles")({ component: ArticlesPage });
