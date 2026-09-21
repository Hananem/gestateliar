import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

interface TablePaginationProps {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
}

export function TablePagination({
  page,
  pageCount,
  onPageChange,
}: TablePaginationProps) {
  const { dir } = useLanguage()
  const isRtl = dir === 'rtl'
  const Prev = isRtl ? ChevronRight : ChevronLeft
  const Next = isRtl ? ChevronLeft : ChevronRight

  return (
    <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3">
      <p className="text-xs text-muted-foreground">
        Page {page} / {pageCount}
      </p>
      <div className="flex items-center gap-1">
        <button
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40"
        >
          <Prev className="size-4" />
        </button>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={
              'flex size-8 items-center justify-center rounded-md text-sm font-medium transition-colors ' +
              (p === page
                ? 'bg-primary text-primary-foreground'
                : 'border border-border text-muted-foreground hover:bg-accent')
            }
          >
            {p}
          </button>
        ))}
        <button
          disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
          className="flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40"
        >
          <Next className="size-4" />
        </button>
      </div>
    </div>
  )
}
