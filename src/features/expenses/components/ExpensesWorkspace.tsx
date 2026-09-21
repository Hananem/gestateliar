import {
  BarChart3,
  CalendarClock,
  ClipboardList,
  Coins,
  Download,
  FileText,
  FolderTree,
  Plus,
  Search,
  WalletCards,
} from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/i18n'

type ExpensePage = 'expenses' | 'categories' | 'recurring' | 'report' | 'costs'
type PageData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}

const pages: Record<ExpensePage, PageData> = {
  expenses: {
    title: 'Dépenses',
    subtitle:
      "Enregistrer les dépenses de l'atelier et les affecter à un lot de production.",
    action: 'Enregistrer une dépense',
    columns: [
      'Référence',
      'Date',
      'Libellé',
      'Catégorie',
      'Montant',
      'Lot de production',
      'Statut',
    ],
    rows: [
      [
        'DEP-2026-0918',
        '20 sept. 2026',
        'Électricité atelier',
        'Charges',
        '86 400 DA',
        'Non affectée',
        'Enregistrée',
      ],
      [
        'DEP-2026-0917',
        '19 sept. 2026',
        'Fournitures de coupe',
        'Fournitures',
        '24 800 DA',
        'LOT-2026-0912',
        'Affectée',
      ],
      [
        'DEP-2026-0916',
        '18 sept. 2026',
        'Transport matières',
        'Transport',
        '18 500 DA',
        'LOT-2026-0911',
        'Affectée',
      ],
    ],
  },
  categories: {
    title: 'Catégories',
    subtitle:
      'Classer les dépenses pour faciliter leur suivi et leurs rapports.',
    action: 'Ajouter une catégorie',
    columns: [
      'Catégorie',
      'Description',
      'Dépenses enregistrées',
      'Montant période',
      'Statut',
    ],
    rows: [
      [
        'Matières et fournitures',
        "Achats liés à l'atelier",
        '18 dépenses',
        '426 800 DA',
        'Active',
      ],
      [
        'Transport',
        'Livraison et déplacement',
        '7 dépenses',
        '118 400 DA',
        'Active',
      ],
      [
        'Charges',
        'Électricité et services',
        '4 dépenses',
        '212 600 DA',
        'Active',
      ],
    ],
  },
  recurring: {
    title: 'Dépenses récurrentes',
    subtitle: "Programmer et suivre les dépenses périodiques de l'atelier.",
    action: 'Ajouter une dépense récurrente',
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
  },
  report: {
    title: 'Rapport des dépenses',
    subtitle:
      'Analyser les dépenses par catégorie, période et lot de production.',
    action: 'Exporter le rapport',
    columns: [
      'Catégorie',
      'Montant période',
      'Part',
      'Dépenses',
      'Lots affectés',
    ],
    rows: [
      ['Matières et fournitures', '426 800 DA', '48 %', '18', '9 lots'],
      ['Charges', '212 600 DA', '24 %', '4', '0 lot'],
      ['Transport', '118 400 DA', '13 %', '7', '6 lots'],
      ['Entretien', '132 200 DA', '15 %', '5', '4 lots'],
    ],
  },
  costs: {
    title: 'Coûts',
    subtitle:
      'Comparer les dépenses affectées et le coût total des lots de production.',
    action: "Exporter l'analyse",
    columns: [
      'Lot',
      'Article',
      'Dépenses affectées',
      'Coût matières',
      'Coût total',
      'Part dépenses',
    ],
    rows: [
      [
        'LOT-2026-0912',
        'Chemise Oran',
        '24 800 DA',
        '612 000 DA',
        '636 800 DA',
        '4 %',
      ],
      [
        'LOT-2026-0911',
        'Pantalon Casbah',
        '18 500 DA',
        '498 000 DA',
        '516 500 DA',
        '4 %',
      ],
      [
        'LOT-2026-0909',
        'Veste Aurès',
        '32 400 DA',
        '540 000 DA',
        '572 400 DA',
        '6 %',
      ],
    ],
  },
}

const pageIcons: Record<ExpensePage, typeof WalletCards> = {
  expenses: WalletCards,
  categories: FolderTree,
  recurring: CalendarClock,
  report: BarChart3,
  costs: Coins,
}

export function ExpensesWorkspace({ page }: { page: ExpensePage }) {
  const { t } = useLanguage()
  const content = pages[page]
  const Icon = pageIcons[page]
  const ActionIcon = {
    expenses: Plus,
    categories: Plus,
    recurring: Plus,
    report: Download,
    costs: Download,
  }[page]
  const summary = {
    expenses: [
      ['Dépenses période', '890 000 DA', '34 dépenses'],
      ['Dépenses affectées', '612 400 DA', '19 lots'],
      ['Dépenses récurrentes', '221 500 DA', '3 actives'],
      ['À affecter', '86 400 DA', '1 dépense'],
    ],
    categories: [
      ['Catégories actives', '8', 'Référentiel'],
      ['Catégorie principale', '426 800 DA', 'Matières'],
      ['Dépenses classées', '34', 'Période active'],
      ['À classer', '2', 'Dépenses'],
    ],
    recurring: [
      ['Dépenses actives', '3', 'Programmées'],
      ['Montant mensuel', '221 500 DA', 'Prévision'],
      ['Prochaine échéance', '01 oct.', 'Loyer atelier'],
      ['À confirmer', '1', 'Échéance proche'],
    ],
    report: [
      ['Dépenses période', '890 000 DA', '34 opérations'],
      ['Catégorie principale', '426 800 DA', 'Matières'],
      ['Lots affectés', '19', 'Sur 34 dépenses'],
      ['Variation', '+6,2 %', 'Vs. août'],
    ],
    costs: [
      ['Lots analysés', '12', 'Période active'],
      ['Coût total', '1,72 M DA', 'Tous les lots'],
      ['Dépenses affectées', '612 400 DA', '19 affectations'],
      ['Coût moyen / lot', '143 300 DA', 'Estimation'],
    ],
  }[page]
  return (
    <PageShell>
      <div className="space-y-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary">
              <Icon className="size-4.5" />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {t(content.title)}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(content.subtitle)}
            </p>
          </div>
          <Button className="w-fit gap-2">
            <ActionIcon className="size-4" />
            {t(content.action)}
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {summary.map(([label, value, note]) => (
            <Card key={label} className="border-border/80 shadow-card">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">{t(label)}</p>
                <p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">
                  {value}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {t(note)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-border/80 shadow-card">
          <CardHeader className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>{t(content.title)}</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                {t('Données actualisées à 08:02')}
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" />
              <Input
                className="h-8 pl-8 text-xs"
                placeholder={t('Rechercher')}
              />
            </div>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-muted/40 text-xs text-muted-foreground">
                <tr>
                  {content.columns.map((column) => (
                    <th key={column} className="px-5 py-3 font-medium">
                      {t(column)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-border/70">
                    <td className="px-5 py-3 font-medium text-foreground">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className="px-5 py-3 text-muted-foreground"
                      >
                        {['Affectée', 'Active', 'Enregistrée'].includes(
                          cell,
                        ) ? (
                          <Badge
                            variant={
                              cell === 'Affectée' || cell === 'Active'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {cell}
                          </Badge>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
        {page === 'expenses' ? (
          <Card className="border-border/80 bg-muted/20 shadow-none">
            <CardContent className="flex items-center gap-2 p-4 text-xs text-muted-foreground">
              <ClipboardList className="size-4" />
              {t(
                "Une dépense peut être affectée à un lot à l'enregistrement ou plus tard",
              )}
            </CardContent>
          </Card>
        ) : null}
        {page === 'costs' ? (
          <Card className="border-border/80 bg-muted/20 shadow-none">
            <CardContent className="flex items-center gap-2 p-4 text-xs text-muted-foreground">
              <FileText className="size-4" />
              {t('Les coûts sont basés sur les dépenses affectées aux lots')}
            </CardContent>
          </Card>
        ) : null}
      </div>
    </PageShell>
  )
}
