import {
  ClipboardCheck,
  Download,
  KeyRound,
  Plus,
  Search,
  Save,
  Settings2,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/i18n'

type AdminPage = 'users' | 'roles' | 'settings' | 'audit'
type AdminData = {
  title: string
  subtitle: string
  action: string
  columns: string[]
  rows: string[][]
}

const pages: Record<AdminPage, AdminData> = {
  users: {
    title: 'Utilisateurs',
    subtitle: "Gérer les comptes qui peuvent accéder à l'application.",
    action: 'Créer un utilisateur',
    columns: ['Utilisateur', 'Rôle', 'Dernière activité', 'Statut'],
    rows: [
      [
        'Fatima Benali',
        "Responsable d'atelier",
        "Aujourd'hui · 08:02",
        'Actif',
      ],
      ['Nadia Khelifi', 'Gestionnaire paie', "Aujourd'hui · 07:45", 'Actif'],
      ['Yacine Benali', 'Opérateur', 'Hier · 16:18', 'Actif'],
      ['Karim Amrani', 'Opérateur', '12 sept. 2026', 'Désactivé'],
    ],
  },
  roles: {
    title: 'Rôles & permissions',
    subtitle: 'Définir les accès aux modules et aux opérations sensibles.',
    action: 'Créer un rôle',
    columns: ['Rôle', 'Utilisateurs', 'Modules autorisés', 'Actions sensibles'],
    rows: [
      ["Responsable d'atelier", '1', 'Tous les modules', 'Clôture, audit'],
      ['Gestionnaire paie', '1', 'Paie, équipe', 'Calcul, fiche de paie'],
      ['Opérateur', '2', 'Production, stock', 'Aucune clôture'],
    ],
  },
  settings: {
    title: 'Paramètres',
    subtitle: "Configurer les paramètres généraux utilisés par l'application.",
    action: 'Enregistrer les paramètres',
    columns: [
      'Paramètre',
      'Valeur actuelle',
      'Dernière modification',
      'Modifié par',
    ],
    rows: [
      ['Devise', 'Dinar algérien (DA)', '20 sept. 2026', 'Fatima Benali'],
      ['Période active', 'Septembre 2026', '20 sept. 2026', 'Fatima Benali'],
      [
        'Seuil de validation',
        'Responsable requis',
        '18 sept. 2026',
        'Fatima Benali',
      ],
    ],
  },
  audit: {
    title: 'Audit',
    subtitle:
      "Consulter l'historique des actions sensibles effectuées dans l'application.",
    action: "Exporter l'audit",
    columns: ['Date / heure', 'Utilisateur', 'Action', 'Module', 'Résultat'],
    rows: [
      [
        '20 sept. · 08:02',
        'Fatima Benali',
        'Ouverture de période',
        'Paie',
        'Réussie',
      ],
      [
        '20 sept. · 07:42',
        'Nadia Khelifi',
        "Enregistrement d'une avance",
        'Paie',
        'Réussie',
      ],
      [
        '19 sept. · 16:18',
        'Yacine Benali',
        'Modification du travail',
        'Équipe',
        'Réussie',
      ],
      [
        '19 sept. · 15:50',
        'Fatima Benali',
        "Affectation d'un lot",
        'Production',
        'Réussie',
      ],
    ],
  },
}

const icons: Record<AdminPage, LucideIcon> = {
  users: Users,
  roles: KeyRound,
  settings: Settings2,
  audit: ClipboardCheck,
}

export function AdminWorkspace({ page }: { page: AdminPage }) {
  const { t } = useLanguage()
  const content = pages[page]
  const Icon = icons[page]
  const ActionIcon = {
    users: Plus,
    roles: Plus,
    settings: Save,
    audit: Download,
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
          {[
            ['Utilisateurs actifs', '3', 'Accès autorisés'],
            ['Rôles configurés', '3', 'Permissions définies'],
            ['Actions sensibles', '12', 'Cette semaine'],
            ['Dernier contrôle', '08:02', "Aujourd'hui"],
          ].map(([label, value, note]) => (
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
                {t('Accès réservé aux utilisateurs autorisés')}
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
            <table className="w-full min-w-[720px] text-left text-sm">
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
                        {['Actif', 'Réussie'].includes(cell) ? (
                          <Badge variant="default">{cell}</Badge>
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
      </div>
    </PageShell>
  )
}
