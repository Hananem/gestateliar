import { createFileRoute } from '@tanstack/react-router'
import { PayrollAdvances } from '@/features/payroll/advances/components/PayrollAdvances'

function AvancesPage() {
  return <PayrollAdvances />
}

export const Route = createFileRoute('/payroll/avances')({
  component: AvancesPage,
})
