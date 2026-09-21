import { createFileRoute } from '@tanstack/react-router'
import { ProductionArticles } from '@/features/production/articles/components/ProductionArticles'

function ArticlesPage() {
  return <ProductionArticles />
}

export const Route = createFileRoute('/production/articles')({
  component: ArticlesPage,
})
