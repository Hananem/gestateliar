import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function ArticlesPage() {
  return <Subpage title="Articles" subtitle="Catalogue des articles fabriqués." />;
}

export const Route = createFileRoute("/production/articles")({ component: ArticlesPage });
