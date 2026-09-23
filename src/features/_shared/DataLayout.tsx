import { useMemo, useState } from 'react'
import { flexRender, type ColumnDef } from '@tanstack/react-table'
import { Search, RefreshCw } from 'lucide-react'

import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type DataLayoutProps<TData> = {
  columns: ColumnDef<TData, unknown>[]
  data: TData[]
  minWidth?: string
}

export function DataLayout<TData>({
  columns,
  data,
  minWidth = 'min-w-[720px]',
}: DataLayoutProps<TData>) {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  const filteredData = useMemo(() => {
    if (!query.trim()) return data

    const search = query.toLowerCase()

    return data.filter((item) =>
      Object.values(item as Record<string, unknown>).some((value) =>
        String(value ?? '')
          .toLowerCase()
          .includes(search),
      ),
    )
  }, [data, query])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredData.length / pageSize),
  )

  const currentPage = Math.min(page, totalPages - 1)

  const paginatedData = useMemo(() => {
    const start = currentPage * pageSize

    return filteredData.slice(start, start + pageSize)
  }, [filteredData, currentPage, pageSize])

  const handleSearch = (value: string) => {
    setQuery(value)
    setPage(0)
  }

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPageSize(Number(event.target.value))
    setPage(0)
  }

  const renderCell = (column: ColumnDef<TData, unknown>, item: TData) => {
    const columnId =
      column.id ??
      ('accessorKey' in column
        ? String(column.accessorKey)
        : undefined)

    const value =
      columnId &&
      'accessorKey' in column &&
      column.accessorKey
        ? (item as Record<string, unknown>)[
            String(column.accessorKey)
          ]
        : undefined

    if ('cell' in column && typeof column.cell === 'function') {
      return flexRender(
        column.cell,
        {
          row: {
            original: item,
          },
        } as never,
      )
    }

    return String(value ?? '')
  }

  return (
    <Card className="overflow-hidden border-border">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={query}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Rechercher..."
            className="h-9 pl-9 text-sm"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setQuery('')
            setPage(0)
          }}
          title="Actualiser"
          className="self-end sm:self-auto"
        >
          <RefreshCw className="size-4" />
        </Button>
      </div>

      {/* ========================= */}
      {/* Cards - Mobile / Tablet   */}
      {/* ========================= */}
      <div className="space-y-3 p-3 sm:p-4 lg:hidden">
        {paginatedData.length > 0 ? (
          paginatedData.map((item, rowIndex) => (
            <Card
              key={rowIndex}
              className="overflow-hidden border-border"
            >
              <div className="divide-y divide-border">
                {columns.map((column, columnIndex) => {
                  const columnId =
                    column.id ??
                    ('accessorKey' in column
                      ? String(column.accessorKey)
                      : undefined)

                  return (
                    <div
                      key={columnId ?? columnIndex}
                      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-4 px-4 py-3 sm:grid-cols-[180px_minmax(0,1fr)]"
                    >
                      <span className="min-w-0 text-xs font-semibold text-muted-foreground sm:text-sm">
                        {typeof column.header === 'string'
                          ? column.header
                          : ''}
                      </span>

                      <span
                        className={cn(
                          'min-w-0 break-words text-right text-sm text-foreground sm:text-left',
                          columnIndex === 0 && 'font-medium',
                        )}
                      >
                        {renderCell(column, item)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Card>
          ))
        ) : (
          <div className="py-10 text-center text-sm text-muted-foreground">
            Aucun résultat.
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* Table - Desktop           */}
      {/* ========================= */}
      <div className="hidden overflow-x-auto lg:block">
        <Table className={cn('w-full border-collapse text-sm', minWidth)}>
          <TableHeader>
            <TableRow className="border-b border-border bg-canvas/60">
              {columns.map((column, index) => (
                <TableHead
                  key={column.id ?? index}
                  className="px-5 py-3 text-start font-semibold text-muted-foreground"
                >
                  {typeof column.header === 'string'
                    ? column.header
                    : ''}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-accent/40"
                >
                  {columns.map((column, columnIndex) => {
                    const columnId =
                      column.id ??
                      ('accessorKey' in column
                        ? String(column.accessorKey)
                        : undefined)

                    return (
                      <TableCell
                        key={columnId ?? columnIndex}
                        className={cn(
                          'px-5 py-3.5 text-foreground/90',
                          columnIndex === 0 &&
                            'font-medium text-foreground',
                        )}
                      >
                        {renderCell(column, item)}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 px-5 text-center text-sm text-muted-foreground"
                >
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 border-t border-border px-3 py-4 text-sm font-medium sm:gap-2 sm:px-5">
        {totalPages > 1 && (
          <button
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="cursor-pointer px-2 py-1 text-primary disabled:cursor-not-allowed disabled:text-muted-foreground"
          >
            Précédent
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={cn(
              'flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors',
              index === currentPage
                ? 'bg-primary text-primary-foreground'
                : 'text-primary hover:bg-primary/10',
            )}
          >
            {index + 1}
          </button>
        ))}

        {totalPages > 1 && (
          <button
            onClick={() =>
              setPage((prev) =>
                Math.min(totalPages - 1, prev + 1),
              )
            }
            disabled={currentPage === totalPages - 1}
            className="cursor-pointer px-2 py-1 text-primary disabled:cursor-not-allowed disabled:text-muted-foreground"
          >
            Suivant
          </button>
        )}
      </div>

      {/* Page size */}
      <div className="flex items-center justify-end gap-2 border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5">
        <span>Afficher</span>

        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="rounded-md border border-border bg-background px-2 py-1 text-foreground"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>

        <span>éléments</span>
      </div>
    </Card>
  )
}
