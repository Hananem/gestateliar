import type { DataLayoutProps } from '@/types/shared'
import { useState } from 'react'
import { Search, RefreshCw } from 'lucide-react'
import { AppShell } from '@/components/layout/AppShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TablePagination } from '@/features/_shared/TablePagination'
import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const STATUS_VALUES = new Set([
  'Actif',
  'Active',
  'Affectée',
  'Enregistrée',
  'Clôturée',
  'En préparation',
  'À vérifier',
  'Validé',
  'Réussie',
  'Urgente',
  'À surveiller',
  'Rouleau faible',
])

function badgeVariant(cell: string) {
  if (
    cell === 'Urgente' ||
    cell === 'Clôturée' ||
    cell === 'Épuisé' ||
    cell === 'Épuisée'
  )
    return 'destructive'
  if (cell === 'À surveiller') return 'warning'
  if (cell === 'Rouleau faible') return 'info'
  if (
    cell === 'Actif' ||
    cell === 'Active' ||
    cell === 'Validé' ||
    cell === 'Réussie' ||
    cell === 'Affectée' ||
    cell === 'Enregistrée'
  )
    return 'success'
  return 'secondary'
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
  const [query, setQuery] = useState('')
  const pageSize = 10

  const filteredRows = query
    ? content.rows.filter((row) =>
        row.some((cell) =>
          cell.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    : content.rows

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize))
  const safePage = Math.min(page, pageCount)
  const visibleRows = filteredRows.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  )

  return (
    <AppShell>
      <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
        {/* ── Header ── */}
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            {Icon && (
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon className="size-5.5" />
              </div>
            )}
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
                {t(content.title)}
              </h1>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                {t(content.subtitle)}
              </p>
            </div>
          </div>
          <Button variant="default" className="gap-2">
            {ActionIcon && <ActionIcon className="size-4" />}
            {t(content.action)}
          </Button>
        </header>

        {/* ── Summary cards ── */}
        {summary && summary.length > 0 && (
          <div className="mt-7 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {summary.map(([label, value, note]) => (
              <Card key={label} className="border-border py-0">
                <CardContent className="flex flex-col gap-2 px-4 py-4">
                  <p className="text-[13px] font-medium text-muted-foreground">
                    {t(label)}
                  </p>
                  <p className="font-display text-3xl font-bold leading-none tracking-tight text-foreground">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground">{t(note)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* ── Data table ── */}
        <Card className="mt-5 overflow-hidden border-border p-0">
          {/* Table toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
            <div>
              <h2 className="font-display text-base font-semibold text-foreground">
                {t(content.title)}
              </h2>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <RefreshCw className="size-3" />
                {t('Données actualisées à 08:02')}
              </p>
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setPage(1)
                }}
                placeholder={t('Rechercher…')}
                className="w-full h-9 ps-9 pe-3 text-sm sm:w-64"
              />
            </div>
          </div>

          {/* Table body */}
          <div className="overflow-x-auto">
            <table className={cn('w-full border-collapse text-sm', minWidth)}>
              <thead>
                <tr className="border-b border-border bg-canvas/60">
                  {content.columns.map((column) => (
                    <th
                      key={column}
                      className="px-5 py-3 text-start font-semibold text-muted-foreground"
                    >
                      {t(column)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleRows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={content.columns.length}
                      className="px-5 py-12 text-center text-sm text-muted-foreground"
                    >
                      Aucun résultat
                    </td>
                  </tr>
                ) : (
                  visibleRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-border/60 transition-colors last:border-0 hover:bg-accent/40"
                    >
                      <td className="px-5 py-3.5 font-medium text-foreground">
                        {row[0]}
                      </td>
                      {row.slice(1).map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-5 py-3.5 text-foreground/90"
                        >
                          {cell.includes('%') || STATUS_VALUES.has(cell) ? (
                            <Badge variant={badgeVariant(cell)}>{cell}</Badge>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <TablePagination
            page={safePage}
            pageCount={pageCount}
            onPageChange={setPage}
          />
        </Card>

        {children}
      </div>
    </AppShell>
  )
}
