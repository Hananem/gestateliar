import { createFileRoute } from '@tanstack/react-router'
import { ExpensesWorkspace } from '@/features/expenses/components/ExpensesWorkspace'

function DepensesRecurrentesPage() {
  return <ExpensesWorkspace page="recurring" />
}

export const Route = createFileRoute('/expenses/depenses-recurrentes')({
  component: DepensesRecurrentesPage,
})
