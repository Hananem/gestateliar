import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { SectionHeading } from '@/components/shared/Shared'
import { workers } from '@/features/dashboard/data'
import { cn } from '@/lib/utils'

export function WorkerProductivity() {
  return (
    <Card className="min-w-0 border-border/80 shadow-card">
      <CardHeader className="flex-row items-center justify-between space-y-0 p-5 pb-3">
        <SectionHeading
          title="Productivité des ouvriers"
          subtitle="Performance individuelle aujourd’hui"
        />
        <Badge variant="outline">Objectif : 36 pièces</Badge>
      </CardHeader>
      <CardContent className="grid gap-3 p-5 pt-1 sm:grid-cols-2">
        {workers.map((worker) => (
          <div
            key={worker.name}
            className="flex items-center gap-3 rounded-md border border-border/80 p-3"
          >
            <Avatar className="size-9">
              <AvatarFallback>{worker.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="truncate text-xs font-semibold">
                    {worker.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {worker.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold">{worker.pieces}</p>
                  <p
                    className={cn(
                      'text-[10px] font-semibold',
                      worker.score >= 100
                        ? 'text-success'
                        : 'text-muted-foreground',
                    )}
                  >
                    {worker.score}%
                  </p>
                </div>
              </div>
              <Progress
                value={Math.min(worker.score, 100)}
                className="mt-2 h-1.5"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
