import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type DailyWork = {
  id: number
  date: string
  worker: string
  lot: string
  article: string
  operation: string
  declaredQuantity: number
  acceptedQuantity: number
  rejectedQuantity: number
  rate: string
  status: string
}

type DailyWorkColumnsProps = {
  onView?: (work: DailyWork) => void
  onEdit?: (work: DailyWork) => void
  onDelete?: (work: DailyWork) => void
}

export const dailyWorkColumns = ({
  onView,
  onEdit,
  onDelete,
}: DailyWorkColumnsProps = {}) => [
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'worker',
    header: 'Ouvrier',
  },
  {
    accessorKey: 'lot',
    header: 'Lot',
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
    accessorKey: 'declaredQuantity',
    header: 'Qté déclarée',
  },
  {
    accessorKey: 'acceptedQuantity',
    header: 'Qté acceptée',
  },
  {
    accessorKey: 'rejectedQuantity',
    header: 'Qté rejetée',
  },
  {
    accessorKey: 'rate',
    header: 'Tarif',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const work = row.original as DailyWork

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(work)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(work)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(work)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]