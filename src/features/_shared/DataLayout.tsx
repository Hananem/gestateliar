import type { ComponentType, ReactNode } from 'react'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { AppShell } from '@/components/layout/AppShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TablePagination } from '@/features/_shared/TablePagination'
import { useLanguage } from '@/lib/i18n'

type PageContent = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}

type SummaryItem = [label: string, value: string, note: string]

type DataLayoutProps = {
  content: PageContent
  summary: SummaryItem[]
  icon: ComponentType<{ className?: string }>
  actionIcon: ComponentType<{ className?: string }>
  minWidth?: string
  children?: ReactNode
}

export function DataLayout({
  content,
  summary,
  icon: Icon,
  actionIcon: ActionIcon,
  minWidth = 'min-w-[720px]',
  children,
}: DataLayoutProps) {
  const { t } = useLanguage()
  const [page, setPage] = useState(1)
  const pageSize = 10
  const pageCount = Math.max(1, Math.ceil(content.rows.length / pageSize))
  const visibleRows = content.rows.slice((page - 1) * pageSize, page * pageSize)

  return (
    <AppShell>
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
              <CardTitle>{t(content.title)}</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('Données actualisées à 08:02')}
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
            <table className={`w-full ${minWidth} text-start text-sm`}>
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
                        {cell.includes('%') ||
                        [
                          'Actif',
                          'Active',
                          'Affectée',
                          'Enregistrée',
                          'Clôturée',
                          'En préparation',
                          'À vérifier',
                          'Validé',
                          'Réussie',
                        ].includes(cell) ? (
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
        {children}
      </div>
    </AppShell>
  )
}
