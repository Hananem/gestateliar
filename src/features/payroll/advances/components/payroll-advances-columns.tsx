import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type PayrollAdvance = {
  id: number
  date: string
  worker: string
  amount: string
  deductionMonth: string
  reason: string
}

type PayrollAdvancesColumnsProps = {
  onView?: (advance: PayrollAdvance) => void
  onEdit?: (advance: PayrollAdvance) => void
  onDelete?: (advance: PayrollAdvance) => void
}

export const payrollAdvancesColumns = ({
  onView,
  onEdit,
  onDelete,
}: PayrollAdvancesColumnsProps = {}) => [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'worker', header: 'Ouvrier' },
  { accessorKey: 'amount', header: 'Montant' },
  { accessorKey: 'deductionMonth', header: 'Mois de retenue' },
  { accessorKey: 'reason', header: 'Motif' },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const advance = row.original as PayrollAdvance

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(advance)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(advance)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(advance)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]