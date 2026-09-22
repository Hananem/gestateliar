import { DataLayout } from '@/features/_shared/DataLayout'
import {
  productionOverviewColumns,
  type ProductionOverviewLot,
} from './production-overview-columns'

const lots: ProductionOverviewLot[] = [
  {
    id: 1,
    number: 'LOT-001',
    article: 'Chemise Classic',
    targetQuantity: 500,
    producedQuantity: 350,
    acceptedQuantity: 330,
    rejectedQuantity: 20,
    remainingQuantity: 150,
    progress: 70,
    status: 'En cours',
  },
  {
    id: 2,
    number: 'LOT-002',
    article: 'Pantalon Basic',
    targetQuantity: 300,
    producedQuantity: 120,
    acceptedQuantity: 115,
    rejectedQuantity: 5,
    remainingQuantity: 180,
    progress: 40,
    status: 'En cours',
  },
  {
    id: 3,
    number: 'LOT-003',
    article: 'Veste Work',
    targetQuantity: 200,
    producedQuantity: 200,
    acceptedQuantity: 190,
    rejectedQuantity: 10,
    remainingQuantity: 0,
    progress: 100,
    status: 'Terminé',
  },
]

export function ProductionOverviewTable() {
  return (
    <div className="mt-4.5">
      <DataLayout
        columns={productionOverviewColumns()}
        data={lots}
        minWidth="min-w-[1100px]"
      />
    </div>
  )
}