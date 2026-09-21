import { Plus } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollDeductions() {
  return (
    <DataLayout
      content={pages.deductions}
      summary={summary.deductions}
      icon={pageIcons.deductions}
      actionIcon={Plus}
    />
  )
}
