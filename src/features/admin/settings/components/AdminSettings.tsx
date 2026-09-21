import { Save, Settings2 } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages } from '@/features/admin/data'

export function AdminSettings() {
  const content = pages.settings

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title={content.title}
        subtitle={content.subtitle}
        action={content.action}
        icon={Settings2}
        actionIcon={Save}
      />

      <DataLayout content={content} />
    </div>
  )
}
