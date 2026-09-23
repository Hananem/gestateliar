// @/features/_shared/Cards.tsx

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/i18n'

type SummaryItem = [string, string, string]

interface CardsProps {
  summary: SummaryItem[]
}

export function Cards({ summary }: CardsProps) {
  const { t } = useLanguage()

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {summary.map(([label, value, note]) => (
        <Card key={label} className="border-border py-0">
          <CardContent className="flex min-w-0 flex-col gap-1.5 p-4 sm:gap-2 sm:p-5">
            <p className="truncate text-xs font-medium text-muted-foreground sm:text-[13px]">
              {t(label)}
            </p>

            <p className="break-words font-display text-2xl font-bold leading-tight tracking-tight text-green-800 sm:text-3xl">
              {value}
            </p>

            <p className="text-xs leading-relaxed text-muted-foreground">
              {t(note)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
