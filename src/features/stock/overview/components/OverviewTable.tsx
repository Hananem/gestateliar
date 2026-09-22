import { DataLayout } from '@/features/_shared/DataLayout'
import { overviewColumns, type OverviewRow } from './overview-columns'

const overviewData: OverviewRow[] = [
  {
    id: 1,
    indicator: 'Matières disponibles',
    value: '248 références',
    change: '+12 ce mois',
  },
  {
    id: 2,
    indicator: 'Rouleaux actifs',
    value: '86 rouleaux',
    change: '14 proches du seuil',
  },
  {
    id: 3,
    indicator: 'Lots de production',
    value: '12 en cours',
    change: 'Dernier mouvement il y a 18 min',
  },
]

export function OverviewTable() {
  const columns = overviewColumns()

  return (
     <div className="mt-4.5">
    <DataLayout
      columns={columns}
      data={overviewData}
      minWidth="min-w-[680px]"
    />
      </div>
  )
}