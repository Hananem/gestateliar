import { PackageCheck, Plus } from 'lucide-react'

import { HeaderLink } from '@/features/_shared/HeaderLink'
import { Cards } from '@/features/_shared/Cards'
import { MaterialsTable } from '@/features/stock/materials/components/MaterialsTable'

const summary = [
  ['Références matières', '248', 'Tissus et accessoires'],
  ['Valeur matières', '8,7 M DA', 'Prix de référence'],
  ['Sous le seuil', '7', '2 urgentes'],
  ['Fournisseurs actifs', '18', 'Ce mois'],
] as [string, string, string][]

export function StockMaterials() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <HeaderLink
        title="Matières & accessoires"
        subtitle="Référentiel des tissus, accessoires, prix et seuils de réapprovisionnement."
        action="Ajouter une matière"
        to="/stock/matieres/ajouter"
        icon={PackageCheck}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <MaterialsTable />
    </div>
  )
}