export type Movement = {
  id: number
  date: string
  type: string
  material: string
  quantity: string
  user: string
}

export const movementsColumns = () => [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Movement).date}
      </span>
    ),
  },

  {
    accessorKey: 'type',
    header: 'Type',
  },

  {
    accessorKey: 'material',
    header: 'Matière',
  },

  {
    accessorKey: 'quantity',
    header: 'Quantité',
  },

  {
    accessorKey: 'user',
    header: 'Utilisateur',
  },
]