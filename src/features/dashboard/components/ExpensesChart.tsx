import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { expenseConfig, expenseData } from '@/features/dashboard/data'
import { SectionHeading } from '@/components/shared/Shared'

export function ExpensesChart() {
  return (
    <Card className="min-w-0 border-border/80 shadow-card">
      <CardHeader className="p-5 pb-1">
        <SectionHeading
          title="Dépenses mensuelles"
          subtitle="Répartition sur les 6 derniers mois"
        />
      </CardHeader>
      <CardContent className="p-3 pt-0 md:p-5 md:pt-0">
        <ChartContainer
          config={expenseConfig}
          className="h-[205px] w-full aspect-auto"
        >
          <BarChart
            data={expenseData}
            margin={{ top: 18, right: 5, left: -28, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="materials"
              stackId="a"
              fill="var(--color-materials)"
            />
            <Bar dataKey="salaries" stackId="a" fill="var(--color-salaries)" />
            <Bar dataKey="overhead" stackId="a" fill="var(--color-overhead)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
