import { KeyRound, Plus } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages } from '@/features/admin/data'

export function AdminRoles() {
  const content = pages.roles

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title={content.title}
        subtitle={content.subtitle}
        action={content.action}
        icon={KeyRound}
        actionIcon={Plus}
      />

      <DataLayout content={content} />
    </div>
  )
}
