import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { productionConfig, productionData } from '@/features/dashboard/data'
import { SectionHeading } from '@/components/shared/Shared'

export function ProductionChart() {
  return (
    <Card className="min-w-0 border-border/80 shadow-card">
      <CardHeader className="flex-row items-start justify-between space-y-0 p-5 pb-2">
        <SectionHeading
          title="Vue de production"
          subtitle="Pièces produites cette semaine"
        />
      </CardHeader>
      <CardContent className="p-3 pt-1 md:p-5 md:pt-1">
        <ChartContainer
          config={productionConfig}
          className="h-[260px] w-full aspect-auto"
        >
          <AreaChart
            data={productionData}
            margin={{ top: 20, right: 10, left: -24, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              domain={[0, 280]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="target"
              type="monotone"
              stroke="var(--color-target)"
              strokeDasharray="5 5"
              fill="transparent"
            />
            <Area
              dataKey="produced"
              type="monotone"
              stroke="var(--color-produced)"
              strokeWidth={2.5}
              fill="var(--color-produced)"
            />
          </AreaChart>
        </ChartContainer>
        <div className="mt-1 flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-[11px] text-muted-foreground">Total semaine</p>
            <p className="mt-0.5 font-display text-lg font-bold">
              1 414 pièces
            </p>
          </div>
          <Badge className="bg-success-soft text-success shadow-none hover:bg-success-soft">
            +6,8 % vs objectif
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
