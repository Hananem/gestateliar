import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type PayrollDeduction = {
  id: number
  date: string
  worker: string
  type: string
  amount: string
  reason: string
}

type PayrollDeductionsColumnsProps = {
  onView?: (deduction: PayrollDeduction) => void
  onEdit?: (deduction: PayrollDeduction) => void
  onDelete?: (deduction: PayrollDeduction) => void
}

export const payrollDeductionsColumns = ({
  onView,
  onEdit,
  onDelete,
}: PayrollDeductionsColumnsProps = {}) => [
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'worker', header: 'Ouvrier' },
  { accessorKey: 'type', header: 'Type' },
  { accessorKey: 'amount', header: 'Montant' },
  { accessorKey: 'reason', header: 'Motif' },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const deduction = row.original as PayrollDeduction

      return (
        <div className="flex items-center justify-end gap-1">
          <Button variant="ghost" size="icon" onClick={() => onView?.(deduction)} title="Voir">
            <Eye className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => onEdit?.(deduction)} title="Modifier">
            <Pencil className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => onDelete?.(deduction)} title="Supprimer">
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]