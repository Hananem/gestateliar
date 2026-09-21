import { PackageCheck } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Rouleaux & lots fournisseurs',
  subtitle:
    "Traçabilité de chaque rouleau, de sa réception jusqu'à son utilisation.",
  action: 'Enregistrer un rouleau',
  columns: ['Rouleau', 'Matière', 'Longueur', 'Fournisseur', 'Réception'],
  rows: [
    [
      'RL-2026-041',
      'Jersey coton noir',
      '120 m / 74 m',
      'Tissus El Djazair',
      '18 sept. 2026',
    ],
    [
      'RL-2026-039',
      'Popeline blanche',
      '90 m / 12 m',
      'Tissages de Sétif',
      '16 sept. 2026',
    ],
    [
      'RL-2026-035',
      'Lycra bleu nuit',
      '65 m / 8 m',
      'Tissus El Djazair',
      '12 sept. 2026',
    ],
  ],
}
const summary = [
  ['Rouleaux actifs', '86', 'Tous fournisseurs'],
  ['Mètres disponibles', '4 280 m', 'Sur les rouleaux'],
  ["Proches de l'épuisement", '14', 'À surveiller'],
  ['Réceptions récentes', '9', 'Depuis 7 jours'],
] as [string, string, string][]

export function StockRolls() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={PackageCheck}
      actionIcon={PackageCheck}
    />
  )
}
