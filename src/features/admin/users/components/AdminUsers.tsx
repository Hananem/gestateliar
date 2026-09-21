import { Users, Plus } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages } from '@/features/admin/data'

export function AdminUsers() {
  return (
    <DataLayout
      content={pages.users}
      summary={[]}
      icon={Users}
      actionIcon={Plus}
    />
  )
}
