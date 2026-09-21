import { Plus } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollBonuses() {
  return (
    <DataLayout
      content={pages.bonuses}
      summary={summary.bonuses}
      icon={pageIcons.bonuses}
      actionIcon={Plus}
    />
  )
}
