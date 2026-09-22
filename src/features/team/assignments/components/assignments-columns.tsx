import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type Assignment = {
  id: number
  worker: string
  article: string
  operation: string
  startDate: string
  endDate: string
  status: string
}

type AssignmentsColumnsProps = {
  onView?: (assignment: Assignment) => void
  onEdit?: (assignment: Assignment) => void
  onDelete?: (assignment: Assignment) => void
}

export const assignmentsColumns = ({
  onView,
  onEdit,
  onDelete,
}: AssignmentsColumnsProps = {}) => [
  {
    accessorKey: 'worker',
    header: 'Ouvrier',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Assignment).worker}
      </span>
    ),
  },
  {
    accessorKey: 'article',
    header: 'Article',
  },
  {
    accessorKey: 'operation',
    header: 'Opération',
  },
  {
    accessorKey: 'startDate',
    header: 'Date de début',
  },
  {
    accessorKey: 'endDate',
    header: 'Date de fin',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const assignment = row.original as Assignment

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(assignment)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(assignment)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(assignment)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]