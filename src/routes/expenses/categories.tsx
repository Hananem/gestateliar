import { createFileRoute } from '@tanstack/react-router'
import { ExpensesWorkspace } from '@/features/expenses/components/ExpensesWorkspace'

function CategoriesPage() {
  return <ExpensesWorkspace page="categories" />
}

export const Route = createFileRoute('/expenses/categories')({
  component: CategoriesPage,
})
