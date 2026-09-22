import { useState } from 'react'
import { DataLayout } from '@/features/_shared/DataLayout'
import { DeleteModal } from '@/features/_shared/DeleteModal'
import { materialsColumns, type Material } from './materials-columns'

const materials: Material[] = [
  {
    id: 1,
    code: 'MAT-001',
    designation: 'Jersey coton 180g',
    type: 'Tissu',
    family: 'Jersey',
    supplier: 'Tissus El Djazair',
    unit: 'm',
    color: 'Noir',
    width: '180 cm',
    reference: 'JC-180-BLK',
    stock: 1240,
    threshold: 500,
    purchasePrice: 850,
    status: 'Actif',
  },
  {
    id: 2,
    code: 'MAT-002',
    designation: 'Fil polyester 120',
    type: 'Accessoire',
    family: 'Fil',
    supplier: 'Filature de Tlemcen',
    unit: 'bobine',
    color: 'Blanc',
    reference: 'FP-120-WHT',
    stock: 84,
    threshold: 30,
    purchasePrice: 320,
    status: 'Actif',
  },
  {
    id: 3,
    code: 'MAT-003',
    designation: 'Bouton nacré 12 mm',
    type: 'Accessoire',
    family: 'Boutons',
    supplier: 'Accessoires El Bahja',
    unit: 'pièce',
    color: 'Ivoire',
    reference: 'BN-12-IVR',
    stock: 2460,
    threshold: 1000,
    purchasePrice: 18,
    status: 'Actif',
  },
]

export function MaterialsTable() {
  const [deleteTarget, setDeleteTarget] = useState<Material | null>(null)

  const handleViewMaterial = (_material: Material) => {
    // ouvrir le détail de la matière
  }

  const handleEditMaterial = (_material: Material) => {
    // ouvrir la modification
  }

  const handleDeleteMaterial = (material: Material) => {
    setDeleteTarget(material)
  }

  const confirmDeleteMaterial = () => {
    if (!deleteTarget) return
    // TODO: remplacer par la vraie suppression (API / state global)
    console.log('Suppression de', deleteTarget)
    setDeleteTarget(null)
  }

  const columns = materialsColumns({
    onView: handleViewMaterial,
    onEdit: handleEditMaterial,
    onDelete: handleDeleteMaterial,
  })

  return (
    <div className="mt-4.5">
      <DataLayout
        columns={columns}
        data={materials}
        minWidth="min-w-[1000px]"
      />

      <DeleteModal
        open={!!deleteTarget}
        onOpenChange={(v) => !v && setDeleteTarget(null)}
        itemName={deleteTarget?.designation}
        onConfirm={confirmDeleteMaterial}
      />
    </div>
  )
}