import {
  Calculator,
  LockKeyhole,
  Plus,
  Printer,
  Search,
  Users,
} from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  pages,
  pageIcons,
  summary,
  type PayrollPage,
} from '@/features/payroll/data'
import { useLanguage } from '@/lib/i18n'

export function PayrollWorkspace({ page }: { page: PayrollPage }) {
  const { t } = useLanguage()
  const content = pages[page]
  const Icon = pageIcons[page]
  const pageSummary = summary[page]
  const ActionIcon = {
    overview: Calculator,
    rates: Plus,
    advances: Plus,
    bonuses: Plus,
    deductions: Plus,
    monthly: Calculator,
    closures: LockKeyhole,
    payslip: Printer,
  }[page]

  return (
    <PageShell>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Icon className="size-4.5" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {t(content.title)}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(content.subtitle)}
            </p>
          </div>
          <Button className="w-fit gap-2">
            <ActionIcon className="size-4" />
            {t(content.action)}
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pageSummary.map(([label, value, note]) => (
            <Card
              key={label}
              className="border-border/80 shadow-card transition-shadow hover:shadow-md"
            >
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">{t(label)}</p>
                <p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">
                  {value}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {t(note)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="overflow-hidden border-border/80 shadow-card">
          <CardHeader className="flex flex-col gap-4 border-b border-border/70 bg-muted/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>{t(content.title)}</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('Données actualisées à 08:02')}
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" />
              <Input
                className="h-8 pl-8 text-xs"
                placeholder={t('Rechercher')}
              />
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-muted/40 text-xs text-muted-foreground">
                <tr>
                  {content.columns.map((column) => (
                    <th key={column} className="px-5 py-3 font-medium">
                      {t(column)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-border/70 transition-colors hover:bg-muted/25"
                  >
                    <td className="px-5 py-3 font-medium text-foreground">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className="px-5 py-3 text-muted-foreground"
                      >
                        {[
                          'Clôturée',
                          'En préparation',
                          'À vérifier',
                          'Validé',
                        ].includes(cell) ? (
                          <Badge
                            variant={
                              cell === 'Clôturée' || cell === 'Validé'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {cell}
                          </Badge>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
        {page === 'monthly' ? (
          <Card className="border-border/80 bg-muted/20 shadow-none">
            <CardContent className="p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">
                {t(
                  'Net = brut + primes + régularisations positives − avances − retenues',
                )}
              </strong>
              <p className="mt-1 text-xs">
                {t(
                  'À la pièce : quantités acceptées uniquement × tarif enregistré · À la journée : jours validés · Au mois : salaire fixe de la période',
                )}
              </p>
            </CardContent>
          </Card>
        ) : null}
        {page === 'payslip' ? (
          <Card className="border-border/80 bg-muted/20 shadow-none">
            <CardContent className="flex items-center gap-2 p-4 text-xs text-muted-foreground">
              <Users className="size-4" />
              {t(
                'Consultation et impression réservées aux utilisateurs autorisés',
              )}
            </CardContent>
          </Card>
        ) : null}
      </div>
    </PageShell>
  )
}
