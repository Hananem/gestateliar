import type { DataLayoutProps } from '@/types/shared'
import { useState } from 'react'
import { Search, RefreshCw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
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
  'À corriger',
  'Non payée',
  'Payée partiellement',
  'Archivé',
  'À valider',
])

function badgeVariant(cell: string) {
  if (
    cell === 'Urgente' ||
    cell === 'Clôturée' ||
    cell === 'Épuisé' ||
    cell === 'Épuisée' ||
    cell === 'Non payée'
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

  const pageCount = Math.max(
    1,
    Math.ceil(filteredRows.length / pageSize),
  )

  const safePage = Math.min(page, pageCount)

  const visibleRows = filteredRows.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize,
  )

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      {/* Data table */}
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
              className="h-9 w-full ps-9 pe-3 text-sm sm:w-64"
            />
          </div>
        </div>

        {/* Table body */}
        <div className="overflow-x-auto">
          <table
            className={cn(
              'w-full border-collapse text-sm',
              minWidth,
            )}
          >
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
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {content.images?.[row[0]] && (
                          <img
                            src={content.images[row[0]]}
                            alt={row[0]}
                            className="size-9 shrink-0 rounded-lg object-cover ring-1 ring-border"
                          />
                        )}

                        <span className="font-medium text-foreground">
                          {row[0]}
                        </span>
                      </div>
                    </td>

                    {row.slice(1).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-5 py-3.5 text-foreground/90"
                      >
                        {cell.includes('%') ||
                        STATUS_VALUES.has(cell) ? (
                          <Badge variant={badgeVariant(cell)}>
                            {cell}
                          </Badge>
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
  )
}