import { Eye } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type MonthlyPayrollEntry = {
  id: number
  worker: string
  gross: string
  advances: string
  bonuses: string
  deductions: string
  net: string
  status: string
}

type MonthlyPayrollColumnsProps = {
  onView?: (entry: MonthlyPayrollEntry) => void
}

export const monthlyPayrollColumns = ({
  onView,
}: MonthlyPayrollColumnsProps = {}) => [
  { accessorKey: 'worker', header: 'Ouvrier' },
  { accessorKey: 'gross', header: 'Brut' },
  { accessorKey: 'advances', header: 'Avances' },
  { accessorKey: 'bonuses', header: 'Primes' },
  { accessorKey: 'deductions', header: 'Retenues' },
  { accessorKey: 'net', header: 'Net à payer' },
  { accessorKey: 'status', header: 'Statut' },
  {
    id: 'actions',
    header: '',
    cell: ({ row }: { row: { original: unknown } }) => {
      const entry = row.original as MonthlyPayrollEntry

      return (
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onView?.(entry)}
            title="Voir"
          >
            <Eye className="size-4" />
          </Button>
        </div>
      )
    },
  },
]