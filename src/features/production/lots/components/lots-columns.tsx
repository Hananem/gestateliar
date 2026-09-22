import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export type ProductionLot = {
  id: number
  number: string
  article: string
  plannedQuantity: number
  startDate: string
  targetDate: string
  responsible: string
  status: string
  progress: number
}

type LotsColumnsProps = {
  onView?: (lot: ProductionLot) => void
  onEdit?: (lot: ProductionLot) => void
  onDelete?: (lot: ProductionLot) => void
}

export const lotsColumns = ({
  onView,
  onEdit,
  onDelete,
}: LotsColumnsProps = {}) => [
  {
    accessorKey: 'number',
    header: 'N° Lot',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as ProductionLot).number}
      </span>
    ),
  },

  {
    accessorKey: 'article',
    header: 'Article',
  },

  {
    accessorKey: 'plannedQuantity',
    header: 'Quantité planifiée',
  },

  {
    accessorKey: 'startDate',
    header: 'Date de début',
  },

  {
    accessorKey: 'targetDate',
    header: 'Date cible',
  },

  {
    accessorKey: 'responsible',
    header: 'Responsable',
  },

  {
    accessorKey: 'status',
    header: 'Statut',
  },

  {
    accessorKey: 'progress',
    header: 'Avancement',
    cell: ({ row }: { row: { original: unknown } }) => {
      const lot = row.original as ProductionLot

      return <span>{lot.progress}%</span>
    },
  },

  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const lot = row.original as ProductionLot

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(lot)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(lot)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(lot)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]