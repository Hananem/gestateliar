import { createFileRoute } from '@tanstack/react-router'
import { ExpensesWorkspace } from '@/features/expenses/components/ExpensesWorkspace'

function DepensesPage() {
  return <ExpensesWorkspace page="expenses" />
}

export const Route = createFileRoute('/expenses/depenses')({
  component: DepensesPage,
})
