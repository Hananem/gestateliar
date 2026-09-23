import { createFileRoute } from '@tanstack/react-router'
import { RecurringExpenses } from '@/features/expenses/recurring/components/RecurringExpenses'

function DepensesRecurrentesPage() {
  return <RecurringExpenses />
}

export const Route = createFileRoute('/expenses/depenses-recurrentes/')({
  component: DepensesRecurrentesPage,
})
