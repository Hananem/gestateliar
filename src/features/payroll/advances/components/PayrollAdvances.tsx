import { Plus } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollAdvances() {
  return (
    <DataLayout
      content={pages.advances}
      summary={summary.advances}
      icon={pageIcons.advances}
      actionIcon={Plus}
    />
  )
}
