import { createFileRoute } from "@tanstack/react-router";
import { Subpage } from "@/features/_shared/Subpage";

function CategoriesPage() {
  return <Subpage title="Catégories" subtitle="Organisation des catégories de dépenses." />;
}

export const Route = createFileRoute("/expenses/categories")({ component: CategoriesPage });
