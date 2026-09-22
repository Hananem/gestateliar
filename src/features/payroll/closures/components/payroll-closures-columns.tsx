import { Eye } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type PayrollClosure = {
  id: number
  month: string
  closingDate: string
  workersCount: number
  gross: string
  net: string
  status: string
}

type PayrollClosuresColumnsProps = {
  onView?: (closure: PayrollClosure) => void
}

export const payrollClosuresColumns = ({
  onView,
}: PayrollClosuresColumnsProps = {}) => [
  { accessorKey: 'month', header: 'Mois' },
  { accessorKey: 'closingDate', header: 'Date de clôture' },
  { accessorKey: 'workersCount', header: 'Ouvriers' },
  { accessorKey: 'gross', header: 'Brut' },
  { accessorKey: 'net', header: 'Net' },
  { accessorKey: 'status', header: 'Statut' },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const closure = row.original as PayrollClosure

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(closure)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>
        </div>
      )
    },
  },
]