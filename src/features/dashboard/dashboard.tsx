import { AppShell } from '@/components/layout/AppShell'
import { ActiveLots } from '@/features/dashboard/components/ActiveLots'
import { ExpensesChart } from '@/features/dashboard/components/ExpensesChart'
import { ProductionChart } from '@/features/dashboard/components/ProductionChart'
import { RecentActivity } from '@/features/dashboard/components/RecentActivity'
import { StatsCards } from '@/features/dashboard/components/StatsCards'
import { StockAlerts } from '@/features/dashboard/components/StockAlerts'
import { WorkerProductivity } from '@/features/dashboard/components/WorkerProductivity'
import { useLanguage } from '@/lib/i18n'

export function Dashboard() {
  const { t } = useLanguage()

  return (
    <AppShell>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase text-primary">
            {t('Dimanche 20 septembre')}
          </p>
          <h1 className="font-display text-2xl font-bold text-foreground md:text-[28px]">
            {t('Bonjour Fatima,')}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('Voici l’état de votre atelier aujourd’hui.')}
          </p>
        </div>
        <div className="rounded-md border bg-background px-3 py-2 text-xs text-muted-foreground shadow-xs">
          {t('Données actualisées à 08:02')}
        </div>
      </div>
      <StatsCards />
      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.8fr)]">
        <ProductionChart />
        <StockAlerts />
      </section>
      <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.8fr)]">
        <ActiveLots />
        <RecentActivity />
      </section>
      <section className="mt-4 grid gap-4 xl:grid-cols-2">
        <WorkerProductivity />
        <ExpensesChart />
      </section>
    </AppShell>
  )
}
