import { createFileRoute } from '@tanstack/react-router'
import { PayrollBonuses } from '@/features/payroll/bonuses/components/PayrollBonuses'

function PrimesPage() {
  return <PayrollBonuses />
}

export const Route = createFileRoute('/payroll/primes')({
  component: PrimesPage,
})
