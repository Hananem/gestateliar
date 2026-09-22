import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type ExpenseCategory = {
  id: number
  name: string
  description: string
  status: string
}

type ExpenseCategoriesColumnsProps = {
  onView?: (category: ExpenseCategory) => void
  onEdit?: (category: ExpenseCategory) => void
  onDelete?: (category: ExpenseCategory) => void
}

export const expenseCategoriesColumns = ({
  onView,
  onEdit,
  onDelete,
}: ExpenseCategoriesColumnsProps = {}) => [
  {
    accessorKey: 'name',
    header: 'Catégorie',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const category = row.original as ExpenseCategory

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(category)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(category)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(category)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]