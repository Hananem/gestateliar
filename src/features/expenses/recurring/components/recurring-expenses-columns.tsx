import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type RecurringExpense = {
  id: number
  name: string
  category: string
  amount: string
  frequency: string
  nextDate: string
  status: string
}

type RecurringExpensesColumnsProps = {
  onView?: (expense: RecurringExpense) => void
  onEdit?: (expense: RecurringExpense) => void
  onDelete?: (expense: RecurringExpense) => void
}

export const recurringExpensesColumns = ({
  onView,
  onEdit,
  onDelete,
}: RecurringExpensesColumnsProps = {}) => [
  {
    accessorKey: 'name',
    header: 'Dépense',
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
    accessorKey: 'frequency',
    header: 'Fréquence',
  },
  {
    accessorKey: 'nextDate',
    header: 'Prochaine date',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const expense = row.original as RecurringExpense

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