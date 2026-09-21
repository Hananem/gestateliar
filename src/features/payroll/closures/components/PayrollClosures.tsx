import { LockKeyhole } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollClosures() {
  const content = pages.closures

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title={content.title}
        subtitle={content.subtitle}
        action={content.action}
        icon={pageIcons.closures}
        actionIcon={LockKeyhole}
      />

      <Cards summary={summary.closures} />

      <DataLayout content={content} />
    </div>
  )
}
