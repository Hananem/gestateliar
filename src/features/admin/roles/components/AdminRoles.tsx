import { KeyRound, Plus } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages } from '@/features/admin/data'

export function AdminRoles() {
  return (
    <DataLayout
      content={pages.roles}
      summary={[]}
      icon={KeyRound}
      actionIcon={Plus}
    />
  )
}
