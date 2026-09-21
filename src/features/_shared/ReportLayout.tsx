import type { ComponentType } from 'react'
import type { Report, SummaryItem } from '@/types/shared'
import { useState } from 'react'
import { Download, Search } from 'lucide-react'
import { AppShell } from '@/components/layout/AppShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TablePagination } from '@/features/_shared/TablePagination'
import { useLanguage } from '@/lib/i18n'

export function ReportLayout({
  report,
  summary,
  icon: Icon,
}: {
  report: Report
  summary: SummaryItem[]
  icon: ComponentType<{ className?: string }>
}) {
  const { t } = useLanguage()
  const [page, setPage] = useState(1)
  const pageSize = 10
  const pageCount = Math.max(1, Math.ceil(report.rows.length / pageSize))
  const visibleRows = report.rows.slice((page - 1) * pageSize, page * pageSize)

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Icon className="size-4.5" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {t(report.title)}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(report.subtitle)}
            </p>
          </div>
          <Button className="w-fit gap-2">
            <Download className="size-4" />
            {t('Exporter le rapport')}
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summary.map(([label, value, note]) => (
            <Card key={label} className="border-border/80 shadow-card">
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
              <CardTitle>{t(report.title)}</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('Filtres de période et de domaine')}
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute start-2.5 top-2 size-4 text-muted-foreground" />
              <Input
                className="h-8 ps-8 text-xs"
                placeholder={t('Rechercher')}
              />
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[720px] text-start text-sm">
              <thead className="bg-muted/40 text-xs text-muted-foreground">
                <tr>
                  {report.columns.map((column) => (
                    <th key={column} className="px-5 py-3 font-medium">
                      {t(column)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleRows.map((row) => (
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
                        {cell.includes('%') ? (
                          <Badge variant="secondary">{cell}</Badge>
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
          <TablePagination
            page={page}
            pageCount={pageCount}
            onPageChange={setPage}
          />
        </Card>
      </div>
    </AppShell>
  )
}
