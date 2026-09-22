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
    <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
      {summary.map(([label, value, note]) => (
        <Card key={label} className="border-border py-0">
          <CardContent className="flex flex-col gap-2 px-4 py-4">
            <p className="text-[13px] font-medium text-muted-foreground">
              {t(label)}
            </p>
            <p className="font-display text-3xl font-bold leading-none tracking-tight text-green-800">
  {value}
</p>
            <p className="text-xs text-muted-foreground">
              {t(note)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}