import { AlertTriangle, Archive } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { SectionHeading } from '@/components/shared/Shared'
import { stockAlerts } from '@/features/dashboard/data'
import { cn } from '@/lib/utils'

export function StockAlerts() {
  return (
    <Card className="min-w-0 border-border/80 shadow-card">
      <CardHeader className="flex-row items-center justify-between space-y-0 p-5 pb-3">
        <SectionHeading
          title="Alertes stock"
          subtitle="3 articles à réapprovisionner"
        />
        <AlertTriangle className="size-4 text-warning-strong" />
      </CardHeader>
      <CardContent className="space-y-3 p-5 pt-1">
        {stockAlerts.map((item) => (
          <div
            key={item.ref}
            className="rounded-md border border-border/80 bg-muted/30 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold">{item.name}</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {item.ref}
                </p>
              </div>
              <Badge variant="outline" className="text-[10px]">
                {item.value} {item.unit}
              </Badge>
            </div>
            <div className="mt-2.5 flex items-center gap-2">
              <Progress
                value={item.level}
                className={cn(
                  'h-1.5',
                  item.critical
                    ? '[&>div]:bg-destructive'
                    : '[&>div]:bg-warning',
                )}
              />
              <span className="text-[10px]">{item.level}%</span>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full text-xs">
          <Archive />
          Voir l’état du stock
        </Button>
      </CardContent>
    </Card>
  )
}
