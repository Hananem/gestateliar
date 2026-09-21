import { Printer } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function Payslip() {
  return (
    <DataLayout
      content={pages.payslip}
      summary={summary.payslip}
      icon={pageIcons.payslip}
      actionIcon={Printer}
    />
  )
}
