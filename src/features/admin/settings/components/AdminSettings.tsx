import { Save, Settings2 } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages } from '@/features/admin/data'

export function AdminSettings() {
  return (
    <DataLayout
      content={pages.settings}
      summary={[]}
      icon={Settings2}
      actionIcon={Save}
    />
  )
}
