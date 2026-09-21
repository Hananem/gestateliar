import { ClipboardCheck } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Inventaires',
  columns: ['Inventaire', 'Périmètre', 'Références', 'Écart', 'Statut'],
  rows: [
    ['INV-2026-09-A', 'Tissus', '42 / 42', '-18,5 m', 'À approuver'],
    ['INV-2026-09-B', 'Accessoires', '96 / 96', '+34 pièces', 'Terminé'],
    ['INV-2026-08-C', 'Partiel - fils', '18 / 20', '2 références', 'En cours'],
  ],
}

const summary = [
  ['Inventaires ouverts', '2', 'À terminer'],
  ['Références contrôlées', '138', 'Ce mois'],
  ['Écart total', '-18,5 unités', 'Avant approbation'],
  ['À approuver', '1 inventaire', 'Responsable requis'],
] as [string, string, string][]

export function StockInventory() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Inventaires"
        subtitle="Comparer le stock physique au stock système et approuver les ajustements."
        action="Créer un inventaire"
        icon={ClipboardCheck}
        actionIcon={ClipboardCheck}
      />

      <Cards summary={summary} />

      <DataLayout content={content} minWidth="min-w-[680px]" />
    </div>
  )
}
