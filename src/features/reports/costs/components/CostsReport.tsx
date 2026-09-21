import { Factory } from 'lucide-react'
import { ReportLayout } from '@/features/_shared/ReportLayout'

const report = {
  title: 'Coûts',
  subtitle: 'Analyse du coût des lots et des dépenses qui leur sont affectées.',
  columns: ['Lot', 'Article', 'Coût matières', 'Dépenses', 'Coût total'],
  rows: [
    ['LOT-2026-0912', 'Chemise Oran', '612 000 DA', '24 800 DA', '636 800 DA'],
    [
      'LOT-2026-0911',
      'Pantalon Casbah',
      '498 000 DA',
      '18 500 DA',
      '516 500 DA',
    ],
    ['LOT-2026-0909', 'Veste Aurès', '540 000 DA', '32 400 DA', '572 400 DA'],
  ],
}

const summary = [
  ['Lots analysés', '12', 'Période active'],
  ['Coût total', '1,72 M DA', 'Tous les lots'],
  ['Coût matières', '1,49 M DA', 'Stock consommé'],
  ['Dépenses affectées', '612 400 DA', '19 affectations'],
] as [string, string, string][]

export function CostsReport() {
  return <ReportLayout report={report} summary={summary} icon={Factory} />
}
