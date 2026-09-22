import { Eye, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export type Article = {
  id: number
  reference: string
  model: string
  colors: string[]
  sizes: string[]
  operations: number
  targetQuantity: number
  status: string
}

type ArticlesColumnsProps = {
  onView?: (article: Article) => void
  onEdit?: (article: Article) => void
  onDelete?: (article: Article) => void
}

export const articlesColumns = ({
  onView,
  onEdit,
  onDelete,
}: ArticlesColumnsProps = {}) => [
  {
    accessorKey: 'reference',
    header: 'Référence',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Article).reference}
      </span>
    ),
  },

  {
    accessorKey: 'model',
    header: 'Modèle',
  },

  {
    accessorKey: 'colors',
    header: 'Couleurs',
    cell: ({ row }: { row: { original: unknown } }) => {
      const article = row.original as Article

      return <span>{article.colors.join(', ')}</span>
    },
  },

  {
    accessorKey: 'sizes',
    header: 'Tailles',
    cell: ({ row }: { row: { original: unknown } }) => {
      const article = row.original as Article

      return <span>{article.sizes.join(', ')}</span>
    },
  },

  {
    accessorKey: 'operations',
    header: 'Opérations',
  },

  {
    accessorKey: 'targetQuantity',
    header: 'Quantité cible',
  },

  {
    accessorKey: 'status',
    header: 'Statut',
  },

  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const article = row.original as Article

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(article)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(article)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(article)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]