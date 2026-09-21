import { Plus } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'
import { pages, pageIcons, summary } from '@/features/payroll/data'

export function PayrollRates() {
  const content = pages.rates

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title={content.title}
        subtitle={content.subtitle}
        action={content.action}
        icon={pageIcons.rates}
        actionIcon={Plus}
      />

      <Cards summary={summary.rates} />

      <DataLayout content={content} />
    </div>
  )
}
