import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type Worker = {
  id: number
  code: string
  name: string
  phone: string
  entryDate: string
  specialty: string
  status: string
  remunerationMode: string
  activeRate: string
}

type WorkersColumnsProps = {
  onView?: (worker: Worker) => void
  onEdit?: (worker: Worker) => void
  onDelete?: (worker: Worker) => void
}

export const workersColumns = ({
  onView,
  onEdit,
  onDelete,
}: WorkersColumnsProps = {}) => [
  {
    accessorKey: 'code',
    header: 'Code',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Worker).code}
      </span>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Nom',
  },
  {
    accessorKey: 'phone',
    header: 'Téléphone',
  },
  {
    accessorKey: 'entryDate',
    header: "Date d'entrée",
  },
  {
    accessorKey: 'specialty',
    header: 'Spécialité',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
  },
  {
    accessorKey: 'remunerationMode',
    header: 'Rémunération',
  },
  {
    accessorKey: 'activeRate',
    header: 'Tarif actif',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const worker = row.original as Worker

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(worker)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(worker)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(worker)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]