import { createFileRoute } from '@tanstack/react-router'
import { PayrollRates } from '@/features/payroll/rates/components/PayrollRates'

function BaremesPage() {
  return <PayrollRates />
}

export const Route = createFileRoute('/payroll/baremes')({
  component: BaremesPage,
})
