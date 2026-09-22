export type Alert = {
  id: number
  material: string
  currentQuantity: string
  alertThreshold: string
  supplier: string
  priority: string
}

export const alertsColumns = () => [
  {
    accessorKey: 'material',
    header: 'Matière / rouleau',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as Alert).material}
      </span>
    ),
  },

  {
    accessorKey: 'currentQuantity',
    header: 'Quantité actuelle',
  },

  {
    accessorKey: 'alertThreshold',
    header: 'Seuil d’alerte',
  },

  {
    accessorKey: 'supplier',
    header: 'Fournisseur',
  },

  {
    accessorKey: 'priority',
    header: 'Priorité',
  },
]