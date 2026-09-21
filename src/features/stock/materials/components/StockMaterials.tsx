import { PackageCheck } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Matières & accessoires',
  subtitle:
    'Référentiel des tissus, accessoires, prix et seuils de réapprovisionnement.',
  action: 'Ajouter une matière',
  columns: ['Matière', 'Couleur / unité', 'Fournisseur', 'Stock', 'Seuil'],
  rows: [
    ['Jersey coton 180g', 'Noir / m', 'Tissus El Djazair', '1 240 m', '500 m'],
    [
      'Fil polyester 120',
      'Blanc / bobine',
      'Filature de Tlemcen',
      '84 bobines',
      '30',
    ],
    [
      'Bouton nacré 12 mm',
      'Ivoire / pièce',
      'Accessoires El Bahja',
      '2 460 p',
      '1 000',
    ],
  ],
}

const summary = [
  ['Références matières', '248', 'Tissus et accessoires'],
  ['Valeur matières', '8,7 M DA', 'Prix de référence'],
  ['Sous le seuil', '7', '2 urgentes'],
  ['Fournisseurs actifs', '18', 'Ce mois'],
] as [string, string, string][]

export function StockMaterials() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={PackageCheck}
      actionIcon={PackageCheck}
      minWidth="min-w-[680px]"
    />
  )
}
