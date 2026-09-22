export type ProductionOverviewLot = {
  id: number
  number: string
  article: string
  targetQuantity: number
  producedQuantity: number
  acceptedQuantity: number
  rejectedQuantity: number
  remainingQuantity: number
  progress: number
  status: string
}

export const productionOverviewColumns = () => [
  {
    accessorKey: 'number',
    header: 'N° Lot',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as ProductionOverviewLot).number}
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
      const lot = row.original as ProductionOverviewLot

      return <span>{lot.progress}%</span>
    },
  },

  {
    accessorKey: 'status',
    header: 'Statut',
  },
]