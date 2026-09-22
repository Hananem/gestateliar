import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type AdminRole = {
  id: number
  name: string
  description: string
  usersCount: number
}

type RolesColumnsProps = {
  onView?: (role: AdminRole) => void
  onEdit?: (role: AdminRole) => void
  onDelete?: (role: AdminRole) => void
}

export const rolesColumns = ({
  onView,
  onEdit,
  onDelete,
}: RolesColumnsProps = {}) => [
  {
    accessorKey: 'name',
    header: 'Rôle',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'usersCount',
    header: 'Utilisateurs',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const role = row.original as AdminRole

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(role)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(role)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(role)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]