import { createFileRoute } from '@tanstack/react-router'
import { ExpenseCategories } from '@/features/expenses/categories/components/ExpenseCategories'

function CategoriesPage() {
  return <ExpenseCategories />
}

export const Route = createFileRoute('/expenses/categories')({
  component: CategoriesPage,
})
