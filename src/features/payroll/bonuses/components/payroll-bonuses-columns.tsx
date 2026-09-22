import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type PayrollBonus = {
  id: number
  date: string
  worker: string
  type: string
  amount: string
  reason: string
}

type PayrollBonusesColumnsProps = {
  onView?: (bonus: PayrollBonus) => void
  onEdit?: (bonus: PayrollBonus) => void
  onDelete?: (bonus: PayrollBonus) => void
}

export const payrollBonusesColumns = ({
  onView,
  onEdit,
  onDelete,
}: PayrollBonusesColumnsProps = {}) => [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'worker', header: 'Ouvrier' },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'amount', header: 'Montant' },
  { accessorKey: 'reason', header: 'Motif' },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const bonus = row.original as PayrollBonus

      return (
        <div className="flex items-center justify-end gap-1">
          <Button variant="ghost" size="icon" onClick={() => onView?.(bonus)} title="Voir">
            <Eye className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => onEdit?.(bonus)} title="Modifier">
            <Pencil className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => onDelete?.(bonus)} title="Supprimer">
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]