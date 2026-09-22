import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export type Inventory = {
  id: number
  inventory: string
  scope: string
  references: string
  gap: string
  status: string
}

interface InventoryColumnsProps {
  onView: (inventory: Inventory) => void
  onEdit: (inventory: Inventory) => void
  onDelete: (inventory: Inventory) => void
}

export const inventoryColumns = ({
  onView,
  onEdit,
  onDelete,
}: InventoryColumnsProps) => [
  {
    accessorKey: 'inventory',
    header: 'Inventaire',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Inventory).inventory}
      </span>
    ),
  },

  {
    accessorKey: 'scope',
    header: 'Périmètre',
  },

  {
    accessorKey: 'references',
    header: 'Références',
  },

  {
    accessorKey: 'gap',
    header: 'Écart',
  },

  {
    accessorKey: 'status',
    header: 'Statut',
  },

  {
    id: 'actions',
    cell: ({ row }: { row: { original: unknown } }) => {
      const inventory = row.original as Inventory

      return (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onView(inventory)}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onEdit(inventory)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive"
            onClick={() => onDelete(inventory)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
]