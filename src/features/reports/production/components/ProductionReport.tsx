import { Shirt } from 'lucide-react'
import { ReportLayout } from '@/features/_shared/ReportLayout'

const report = {
  title: 'Production',
  subtitle: 'Synthèse des quantités planifiées, réalisées et rejetées.',
  columns: ['Lot', 'Article', 'Planifié', 'Réalisé', 'Accepté', 'Rejeté'],
  rows: [
    ['LOT-2026-0912', 'Chemise Oran', '320', '250', '244', '6'],
    ['LOT-2026-0911', 'Pantalon Casbah', '180', '94', '91', '3'],
    ['LOT-2026-0909', 'Veste Aurès', '120', '37', '36', '1'],
  ],
}

const summary = [
  ['Lots suivis', '12', 'Période active'],
  ['Planifié', '620 pièces', 'Tous les lots'],
  ['Accepté', '371 pièces', '97,4 %'],
  ['Rejeté', '10 pièces', 'À traiter'],
] as [string, string, string][]

export function ProductionReport() {
  return <ReportLayout report={report} summary={summary} icon={Shirt} />
}
