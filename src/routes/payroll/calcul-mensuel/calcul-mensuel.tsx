import { createFileRoute } from '@tanstack/react-router'
import { PayrollMonthly } from '@/features/payroll/monthly/components/PayrollMonthly'

function CalculMensuelPage() {
  return <PayrollMonthly />
}

export const Route = createFileRoute('/payroll/calcul-mensuel/calcul-mensuel')({
  component: CalculMensuelPage,
})
