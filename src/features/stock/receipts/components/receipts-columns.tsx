export type Receipt = {
  id: number
  reference: string
  supplier: string
  material: string
  quantity: string
  date: string
}

export const receiptsColumns = () => [
  {
    accessorKey: 'reference',
    header: 'Référence',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Receipt).reference}
      </span>
    ),
  },

  {
    accessorKey: 'supplier',
    header: 'Fournisseur',
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
    accessorKey: 'date',
    header: 'Date',
  },
]