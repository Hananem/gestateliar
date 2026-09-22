import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export type Material = {
  id: number
  code: string
  designation: string
  type: string
  family: string
  supplier: string
  unit: string
  color: string
  width?: string
  reference: string
  stock: number
  threshold: number
  purchasePrice: number
  status: string
}

type MaterialsColumnsProps = {
  onView?: (material: Material) => void
  onEdit?: (material: Material) => void
  onDelete?: (material: Material) => void
}

export const materialsColumns = ({
  onView,
  onEdit,
  onDelete,
}: MaterialsColumnsProps = {}) => [
  {
    accessorKey: 'code',
    header: 'Code',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Material).code}
      </span>
    ),
  },

  {
    accessorKey: 'designation',
    header: 'Désignation',
  },

  {
    accessorKey: 'type',
    header: 'Type',
  },

  {
    accessorKey: 'family',
    header: 'Famille',
  },

  {
    accessorKey: 'supplier',
    header: 'Fournisseur',
  },

  {
    accessorKey: 'color',
    header: 'Couleur',
  },

  {
    accessorKey: 'stock',
    header: 'Stock',
    cell: ({ row }: { row: { original: unknown } }) => {
      const material = row.original as Material
      return (
        <span>
          {material.stock} {material.unit}
        </span>
      )
    },
  },

  {
    accessorKey: 'status',
    header: 'Statut',
  },

  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const material = row.original as Material

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(material)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(material)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(material)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]