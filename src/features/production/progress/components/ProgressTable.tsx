import { DataLayout } from '@/features/_shared/DataLayout'
import {
  progressColumns,
  type ProductionProgressRow,
} from './progress-columns'

const progressData: ProductionProgressRow[] = [
  {
    id: 1,
    lot: 'LOT-001',
    article: 'Chemise Classic',
    targetQuantity: 500,
    producedQuantity: 350,
    acceptedQuantity: 330,
    rejectedQuantity: 20,
    remainingQuantity: 150,
    progress: 70,
  },
  {
    id: 2,
    lot: 'LOT-002',
    article: 'Pantalon Basic',
    targetQuantity: 300,
    producedQuantity: 120,
    acceptedQuantity: 115,
    rejectedQuantity: 5,
    remainingQuantity: 180,
    progress: 40,
  },
  {
    id: 3,
    lot: 'LOT-003',
    article: 'Veste Work',
    targetQuantity: 200,
    producedQuantity: 200,
    acceptedQuantity: 190,
    rejectedQuantity: 10,
    remainingQuantity: 0,
    progress: 100,
  },
]

export function ProgressTable() {
  return (
    <div className="mt-4.5">
      <DataLayout
        columns={progressColumns()}
        data={progressData}
        minWidth="min-w-[1100px]"
      />
    </div>
  )
}