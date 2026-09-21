import { Settings2, TriangleAlert } from 'lucide-react'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Alertes de stock',
  subtitle:
    'Prioriser les matières sous le seuil, épuisées ou proches de la fin de rouleau.',
  action: 'Configurer les seuils',
  columns: [
    'Matière / rouleau',
    'Quantité actuelle',
    'Seuil d’alerte',
    'Fournisseur',
    'Priorité',
  ],
  rows: [
    ['Lycra bleu nuit', '8 m', '20 m', 'Tissus El Djazair', 'Urgente'],
    [
      'Fil polyester 120',
      '28 bobines',
      '30 bobines',
      'Filature de Tlemcen',
      'À surveiller',
    ],
    [
      'RL-2026-039 · Popeline',
      '12 m',
      '15 m',
      'Tissages de Sétif',
      'Rouleau faible',
    ],
  ],
}
const summary = [
  ['Alertes ouvertes', '7', '2 urgentes'],
  ['Matières épuisées', '2', 'Réapprovisionnement'],
  ['Sous le seuil', '5', 'À surveiller'],
  ['Rouleaux faibles', '14', 'Proches de la fin'],
] as [string, string, string][]

export function StockAlerts() {
  return (
    <DataLayout
      content={content}
      summary={summary}
      icon={TriangleAlert}
      actionIcon={Settings2}
    />
  )
}
