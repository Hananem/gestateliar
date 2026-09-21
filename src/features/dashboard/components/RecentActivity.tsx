import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SectionHeading } from '@/components/shared/Shared'
import { activityItems } from '@/features/dashboard/data'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

export function RecentActivity() {
  const { t } = useLanguage()

  return (
    <Card className="min-w-0 border-border/80 shadow-card">
      <CardHeader className="p-5 pb-2">
        <SectionHeading
          title={t('Activité récente')}
          subtitle={t('Derniers mouvements dans l’atelier')}
        />
      </CardHeader>
      <CardContent className="p-5 pt-2">
        <div className="space-y-0">
          {activityItems.map((item, index) => (
            <div key={item.text} className="relative flex gap-3 pb-4 last:pb-0">
              {index < activityItems.length - 1 ? (
                <span className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-border" />
              ) : null}
              <div
                className={cn(
                  'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-background',
                  item.tone === 'success' && 'border-success/20 text-success',
                  item.tone === 'warning' &&
                    'border-warning/30 text-warning-strong',
                )}
              >
                <item.icon className="size-3.5" />
              </div>
              <div>
                <p className="text-xs font-semibold">{item.text}</p>
                <p className="text-[10px] text-muted-foreground">{item.sub}</p>
                <p className="mt-1 text-[10px] text-muted-foreground/70">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
