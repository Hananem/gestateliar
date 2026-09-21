import { createFileRoute } from '@tanstack/react-router'
import { Payslip } from '@/features/payroll/payslip/components/Payslip'

function FicheDePaiePage() {
  return <Payslip />
}

export const Route = createFileRoute('/payroll/fiche-de-paie')({
  component: FicheDePaiePage,
})
