import { PackageCheck } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Matières & accessoires',
  columns: [
    'Matière',
    'Couleur / unité',
    'Fournisseur',
    'Stock',
    'Seuil',
  ],
  rows: [
    ['Jersey coton 180g', 'Noir / m', 'Tissus El Djazair', '1 240 m', '500 m'],
    ['Fil polyester 120', 'Blanc / bobine', 'Filature de Tlemcen', '84 bobines', '30'],
    ['Bouton nacré 12 mm', 'Ivoire / pièce', 'Accessoires El Bahja', '2 460 p', '1 000'],
  ],
  images: {
    'Jersey coton 180g':
      'https://placehold.co/64x64/1a1a1a/ffffff?text=JC',
    'Fil polyester 120':
      'https://placehold.co/64x64/f5f5f0/333333?text=FP',
    'Bouton nacré 12 mm':
      'https://placehold.co/64x64/e8e0d0/333333?text=BN',
  },
}

const summary = [
  ['Références matières', '248', 'Tissus et accessoires'],
  ['Valeur matières', '8,7 M DA', 'Prix de référence'],
  ['Sous le seuil', '7', '2 urgentes'],
  ['Fournisseurs actifs', '18', 'Ce mois'],
] as [string, string, string][]

export function StockMaterials() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Matières & accessoires"
        subtitle="Référentiel des tissus, accessoires, prix et seuils de réapprovisionnement."
        action="Ajouter une matière"
        icon={PackageCheck}
        actionIcon={PackageCheck}
      />

      <Cards summary={summary} />

      <DataLayout content={content} minWidth="min-w-[680px]" />
    </div>
  )
}
