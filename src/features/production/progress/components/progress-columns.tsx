export type ProductionProgressRow = {
  id: number
  lot: string
  article: string
  targetQuantity: number
  producedQuantity: number
  acceptedQuantity: number
  rejectedQuantity: number
  remainingQuantity: number
  progress: number
}

export const progressColumns = () => [
  {
    accessorKey: 'lot',
    header: 'N° Lot',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as ProductionProgressRow).lot}
      </span>
    ),
  },

  {
    accessorKey: 'article',
    header: 'Article',
  },

  {
    accessorKey: 'targetQuantity',
    header: 'Quantité cible',
  },

  {
    accessorKey: 'producedQuantity',
    header: 'Produite',
  },

  {
    accessorKey: 'acceptedQuantity',
    header: 'Acceptée',
  },

  {
    accessorKey: 'rejectedQuantity',
    header: 'Rejets',
  },

  {
    accessorKey: 'remainingQuantity',
    header: 'Reste',
  },

  {
    accessorKey: 'progress',
    header: 'Avancement',
    cell: ({ row }: { row: { original: unknown } }) => {
      const progress = (row.original as ProductionProgressRow).progress

      return <span>{progress}%</span>
    },
  },
]