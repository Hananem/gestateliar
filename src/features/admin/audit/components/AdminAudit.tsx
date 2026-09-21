import { ClipboardCheck, Download } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages } from '@/features/admin/data'

export function AdminAudit() {
  return (
    <DataLayout
      content={pages.audit}
      summary={[]}
      icon={ClipboardCheck}
      actionIcon={Download}
    />
  )
}
