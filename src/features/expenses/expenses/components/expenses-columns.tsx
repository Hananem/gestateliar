import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type Expense = {
  id: number
  date: string
  category: string
  amount: string
  paymentMode: string
  beneficiary: string
  receipt: string
  note: string
}

type ExpensesColumnsProps = {
  onView?: (expense: Expense) => void
  onEdit?: (expense: Expense) => void
  onDelete?: (expense: Expense) => void
}

export const expensesColumns = ({
  onView,
  onEdit,
  onDelete,
}: ExpensesColumnsProps = {}) => [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'category',
    header: 'Catégorie',
  },
  {
    accessorKey: 'amount',
    header: 'Montant',
  },
  {
    accessorKey: 'paymentMode',
    header: 'Mode de paiement',
  },
  {
    accessorKey: 'beneficiary',
    header: 'Bénéficiaire',
  },
  {
    accessorKey: 'receipt',
    header: 'Justificatif',
  },
  {
    accessorKey: 'note',
    header: 'Note',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const expense = row.original as Expense

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(expense)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(expense)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(expense)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]