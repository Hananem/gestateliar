import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { stats } from '@/features/dashboard/data'
import { useLanguage } from '@/lib/i18n'

export function StatsCards() {
  const { t } = useLanguage()

  return (
    <section
      className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
      aria-label={t('Indicateurs clés')}
    >
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="min-w-0 overflow-hidden border-border/80 shadow-card"
        >
          <CardContent className="p-4.5">
            <div className="flex items-start justify-between">
              <div className="flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary">
                <stat.icon className="size-[18px]" />
              </div>
              <div
                className={cn(
                  'flex items-center gap-1 text-xs font-semibold',
                  stat.trend === 'down' ? 'text-destructive' : 'text-success',
                )}
              >
                {stat.trend === 'down' ? (
                  <TrendingDown className="size-3.5" />
                ) : (
                  <TrendingUp className="size-3.5" />
                )}
                {stat.detail}
              </div>
            </div>
            <p className="mt-4 text-xs font-medium text-muted-foreground">
              {t(stat.label)}
            </p>
            <div className="mt-1 flex items-baseline justify-between gap-2">
              <p className="font-display text-2xl font-bold tabular-nums text-foreground">
                {stat.value}
              </p>
              <p className="text-[10px] text-muted-foreground">{t(stat.note)}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
