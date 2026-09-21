import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n'

export function TablePagination({
  page,
  pageCount,
  onPageChange,
}: {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
}) {
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <div className="flex items-center justify-between border-t border-border/70 px-5 py-3 text-xs text-muted-foreground">
      <span>
        {isArabic
          ? `صفحة ${page} من ${pageCount}`
          : `Page ${page} sur ${pageCount}`}
      </span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <ChevronLeft className="size-3.5 rtl:rotate-180" />
          {isArabic ? 'السابق' : 'Précédent'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1"
          disabled={page === pageCount}
          onClick={() => onPageChange(page + 1)}
        >
          {isArabic ? 'التالي' : 'Suivant'}
          <ChevronRight className="size-3.5 rtl:rotate-180" />
        </Button>
      </div>
    </div>
  )
}
