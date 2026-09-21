import { Plus } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollRates() {
  return (
    <DataLayout
      content={pages.rates}
      summary={summary.rates}
      icon={pageIcons.rates}
      actionIcon={Plus}
    />
  )
}
