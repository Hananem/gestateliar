import { useState } from 'react'
import { ClipboardCheck } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { InventoryTable } from '@/features/stock/inventory/components/InventoryTable'
import { CreateInventoryModal } from '@/features/stock/inventory/components/CreateInventoryModal'

const summary = [
  ['Inventaires ouverts', '2', 'À terminer'],
  ['Références contrôlées', '138', 'Ce mois'],
  ['Écart total', '-18,5 unités', 'Avant approbation'],
  ['À approuver', '1 inventaire', 'Responsable requis'],
] as [string, string, string][]

export function StockInventory() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Inventaires"
        subtitle="Comparer le stock physique au stock système et approuver les ajustements."
        action="Créer un inventaire"
        icon={ClipboardCheck}
        actionIcon={ClipboardCheck}
        onAction={() => setIsModalOpen(true)}
      />

      <Cards summary={summary} />

      <InventoryTable />

     <CreateInventoryModal
  open={isModalOpen}
  onOpenChange={setIsModalOpen}
/>
    </div>
  )
}