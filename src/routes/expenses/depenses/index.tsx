import { createFileRoute } from '@tanstack/react-router'
import { Expenses } from '@/features/expenses/expenses/components/Expenses'

function DepensesPage() {
  return <Expenses />
}

export const Route = createFileRoute('/expenses/depenses/')({
  component: DepensesPage,
})
