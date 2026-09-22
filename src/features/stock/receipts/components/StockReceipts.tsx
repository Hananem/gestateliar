import { ArrowDownToLine } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { ReceiptsTable } from '@/features/stock/receipts/components/ReceiptsTable'

const summary = [
  ['Réceptions période', '18', 'Depuis le 1er sept.'],
  ['Quantité reçue', '3 840 unités', 'Toutes matières'],
  ['Fournisseurs', '12', 'Actifs sur la période'],
  ['Dernière réception', '08:01', '20 sept. 2026'],
] as [string, string, string][]

export function StockReceipts() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Réceptions"
        subtitle="Enregistrer les entrées, leurs documents justificatifs et la mise à jour du stock."
        action="Nouvelle réception"
        icon={ArrowDownToLine}
        actionIcon={ArrowDownToLine}
      />

      <Cards summary={summary} />

      <ReceiptsTable />
    </div>
  )
}