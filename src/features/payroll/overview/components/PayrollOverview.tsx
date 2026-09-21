import { Calculator } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollOverview() {
  return (
    <DataLayout
      content={pages.overview}
      summary={summary.overview}
      icon={pageIcons.overview}
      actionIcon={Calculator}
    />
  )
}
