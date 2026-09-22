import { useState } from 'react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import { inventoryColumns, type Inventory } from './inventory-columns'
import { ViewInventoryModal } from './ViewInventoryModal'
import { EditInventoryModal } from './EditInventoryModal'

const inventories: Inventory[] = [
  {
    id: 1,
    inventory: 'INV-2026-09-A',
    scope: 'Tissus',
    references: '42 / 42',
    gap: '-18,5 m',
    status: 'À approuver',
  },
  {
    id: 2,
    inventory: 'INV-2026-09-B',
    scope: 'Accessoires',
    references: '96 / 96',
    gap: '+34 pièces',
    status: 'Terminé',
  },
  {
    id: 3,
    inventory: 'INV-2026-08-C',
    scope: 'Partiel - fils',
    references: '18 / 20',
    gap: '2 références',
    status: 'En cours',
  },
]

export function InventoryTable() {
  const [viewTarget, setViewTarget] = useState<Inventory | null>(null)
  const [editTarget, setEditTarget] = useState<Inventory | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Inventory | null>(null)

  const handleViewInventory = (inventory: Inventory) => {
    setViewTarget(inventory)
  }

  const handleEditInventory = (inventory: Inventory) => {
    setEditTarget(inventory)
  }

  const handleDeleteInventory = (inventory: Inventory) => {
    setDeleteTarget(inventory)
  }

  const confirmDeleteInventory = () => {
    if (!deleteTarget) return
    // TODO: remplacer par la vraie suppression (API / state global)
    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const handleEditSubmit = (data: Inventory) => {
    // TODO: remplacer par la vraie mise à jour (API / state global)
    console.log('Mise à jour de', data)
    setEditTarget(null)
  }

  const columns = inventoryColumns({
    onView: handleViewInventory,
    onEdit: handleEditInventory,
    onDelete: handleDeleteInventory,
  })

  return (
   <div className="mt-4.5"> 
      <DataLayout columns={columns} data={inventories} minWidth="min-w-[680px]" />

      <ViewInventoryModal
        open={!!viewTarget}
        onOpenChange={(v) => !v && setViewTarget(null)}
        inventory={viewTarget}
      />

      <EditInventoryModal
        open={!!editTarget}
        onOpenChange={(v) => !v && setEditTarget(null)}
        inventory={editTarget}
        onSubmit={handleEditSubmit}
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.inventory}
        onConfirm={confirmDeleteInventory}
      />
    </div>
  )
}