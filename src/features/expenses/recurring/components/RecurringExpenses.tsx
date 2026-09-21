import { CalendarClock, Plus } from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'

const content = {
  title: 'Dépenses récurrentes',
  columns: [
    'Libellé',
    'Catégorie',
    'Montant prévu',
    'Périodicité',
    'Prochaine échéance',
    'Statut',
  ],
  rows: [
    [
      'Loyer atelier',
      'Charges',
      '180 000 DA',
      'Mensuelle',
      '01 oct. 2026',
      'Active',
    ],
    [
      'Abonnement internet',
      'Services',
      '6 500 DA',
      'Mensuelle',
      '05 oct. 2026',
      'Active',
    ],
    [
      'Maintenance machines',
      'Entretien',
      '35 000 DA',
      'Trimestrielle',
      '15 nov. 2026',
      'Active',
    ],
  ],
}

const summary = [
  ['Dépenses actives', '3', 'Programmées'],
  ['Montant mensuel', '221 500 DA', 'Prévision'],
  ['Prochaine échéance', '01 oct.', 'Loyer atelier'],
  ['À confirmer', '1', 'Échéance proche'],
] as [string, string, string][]

export function RecurringExpenses() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title="Dépenses récurrentes"
        subtitle="Programmer et suivre les dépenses périodiques de l'atelier."
        action="Ajouter une dépense récurrente"
        icon={CalendarClock}
        actionIcon={Plus}
      />

      <Cards summary={summary} />

      <DataLayout content={content} />
    </div>
  )
}
