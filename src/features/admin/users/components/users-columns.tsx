import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type AdminUser = {
  id: number
  name: string
  email: string
  role: string
  status: string
}

type UsersColumnsProps = {
  onView?: (user: AdminUser) => void
  onEdit?: (user: AdminUser) => void
  onDelete?: (user: AdminUser) => void
}

export const usersColumns = ({
  onView,
  onEdit,
  onDelete,
}: UsersColumnsProps = {}) => [
  {
    accessorKey: 'name',
    header: 'Nom',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Rôle',
  },
  {
    accessorKey: 'status',
    header: 'Statut',
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const user = row.original as AdminUser

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(user)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(user)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(user)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]