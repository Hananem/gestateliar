import { Clock3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { SectionHeading } from '@/components/shared/Shared'
import { lots } from '@/features/dashboard/data'

export function ActiveLots() {
  return (
    <Card className="min-w-0 border-border/80 shadow-card">
      <CardHeader className="p-5 pb-3">
        <SectionHeading
          title="Lots de production actifs"
          subtitle="4 lots actuellement en fabrication"
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr className="border-y bg-muted/40 text-[10px] uppercase text-muted-foreground">
                <th className="px-5 py-2.5">Lot / Client</th>
                <th className="px-3 py-2.5">Article</th>
                <th className="px-3 py-2.5">Avancement</th>
                <th className="px-3 py-2.5">Échéance</th>
                <th className="px-5 py-2.5 text-right">Statut</th>
              </tr>
            </thead>
            <tbody>
              {lots.map((lot) => (
                <tr
                  key={lot.ref}
                  className="border-b border-border/70 last:border-0"
                >
                  <td className="px-5 py-3">
                    <p className="text-xs font-semibold">{lot.ref}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {lot.client}
                    </p>
                  </td>
                  <td className="px-3 py-3">
                    <p className="text-xs font-medium">{lot.item}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {lot.qty}
                    </p>
                  </td>
                  <td className="w-44 px-3 py-3">
                    <div className="mb-1.5 flex justify-between text-[10px]">
                      <span>Progression</span>
                      <span className="font-semibold">{lot.progress}%</span>
                    </div>
                    <Progress value={lot.progress} className="h-1.5" />
                  </td>
                  <td className="px-3 py-3">
                    <span className="flex items-center gap-1.5 text-xs">
                      <Clock3 className="size-3" />
                      {lot.due}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <Badge variant="secondary">{lot.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
