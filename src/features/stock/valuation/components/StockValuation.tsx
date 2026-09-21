import { Download, PackageCheck } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Valorisation du stock',
  subtitle:
    "Estimation de la valeur du stock selon le prix d'achat de référence.",
  action: 'Exporter la valorisation',
  columns: [
    'Matière',
    'Quantité',
    'Prix de référence',
    'Valeur estimée',
    'Part',
  ],
  rows: [
    ['Jersey coton noir', '1 240 m', '2 450 DA / m', '3 038 000 DA', '42 %'],
    ['Popeline blanche', '680 m', '1 880 DA / m', '1 278 400 DA', '18 %'],
    [
      'Accessoires divers',
      '12 840 pièces',
      '115 DA / pièce',
      '1 476 600 DA',
      '20 %',
    ],
  ],
}
const summary = [
  ['Valeur totale', '12,4 M DA', 'Stock disponible'],
  ['Matière principale', '3,04 M DA', 'Jersey coton noir'],
  ['Part fournisseurs', '18', 'Fournisseurs évalués'],
  ['Variation mensuelle', '+4,8 %', 'Vs. août 2026'],
] as [string, string, string][]

export function StockValuation() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={PackageCheck}
      actionIcon={Download}
    />
  )
}
