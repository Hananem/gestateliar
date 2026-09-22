import { Eye, Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type PayrollRate = {
  id: number
  worker: string
  remunerationMode: string
  operation: string
  rate: string
  effectiveDate: string
  status: string
}

type PayrollRatesColumnsProps = {
  onView?: (rate: PayrollRate) => void
  onEdit?: (rate: PayrollRate) => void
  onDelete?: (rate: PayrollRate) => void
}

export const payrollRatesColumns = ({
  onView,
  onEdit,
  onDelete,
}: PayrollRatesColumnsProps = {}) => [
  { accessorKey: 'worker', header: 'Ouvrier' },
  { accessorKey: 'remunerationMode', header: 'Mode' },
  { accessorKey: 'operation', header: 'Opération' },
  { accessorKey: 'rate', header: 'Tarif' },
  { accessorKey: 'effectiveDate', header: "Date d'effet" },
  { accessorKey: 'status', header: 'Statut' },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const rate = row.original as PayrollRate

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(rate)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit?.(rate)}
            title="Modifier"
          >
            <Pencil className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(rate)}
            title="Supprimer"
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      )
    },
  },
]