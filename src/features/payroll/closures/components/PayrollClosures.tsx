import { LockKeyhole } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollClosures() {
  return (
    <DataLayout
      content={pages.closures}
      summary={summary.closures}
      icon={pageIcons.closures}
      actionIcon={LockKeyhole}
    />
  )
}
