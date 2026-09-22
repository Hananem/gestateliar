export type OverviewRow = {
  id: number
  indicator: string
  value: string
  change: string
}

export const overviewColumns = () => [
  {
    accessorKey: 'indicator',
    header: 'Indicateur',
    cell: ({ row }: { row: { original: unknown } }) => (
      <span className="font-medium text-foreground">
        {(row.original as OverviewRow).indicator}
      </span>
    ),
  },

  {
    accessorKey: 'value',
    header: 'Valeur',
  },

  {
    accessorKey: 'change',
    header: 'Évolution',
  },
]