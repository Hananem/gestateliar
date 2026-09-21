import { Calculator } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollMonthly() {
  return (
    <DataLayout
      content={pages.monthly}
      summary={summary.monthly}
      icon={pageIcons.monthly}
      actionIcon={Calculator}
    />
  )
}
