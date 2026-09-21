import {
  ClipboardCheck,
  ClipboardList,
  Edit3,
  History,
  Plus,
  Users,
  XCircle,
} from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/i18n'
import type { TeamPage, TeamPageData } from '@/types/team'
import type { SummaryItem } from '@/types/shared'

const pageContent: Record<TeamPage, TeamPageData> = {
  workers: {
    title: 'Ouvriers',
    subtitle:
      "Créer, consulter, modifier et archiver les travailleurs de l'atelier.",
    action: 'Créer un ouvrier',
    columns: ['Ouvrier', 'Statut', 'Actions'],
    rows: [
      ['Yacine Benali', 'Actif', 'Voir · Modifier · Archiver'],
      ['Nadia Khelifi', 'Actif', 'Voir · Modifier · Archiver'],
      ['Karim Amrani', 'Archivé', 'Voir · Modifier'],
    ],
  },
  assignments: {
    title: 'Affectations',
    subtitle:
      'Distribuer les ouvriers sur les opérations et suivre les lots de production.',
    action: 'Créer une affectation',
    columns: ['Ouvrier', 'Opération', 'Lot de production', 'Statut'],
    rows: [
      ['Yacine Benali', 'Coupe', 'LOT-2026-0912', 'En cours'],
      ['Nadia Khelifi', 'Assemblage', 'LOT-2026-0911', 'En cours'],
      ['Karim Amrani', 'Finition & contrôle', 'LOT-2026-0909', 'Planifiée'],
    ],
  },
  dailyWork: {
    title: 'Travail quotidien',
    subtitle:
      'Enregistrer et valider le travail réalisé par ouvrier, article, opération, quantité et période.',
    action: 'Enregistrer un travail',
    columns: [
      'Ouvrier',
      'Article',
      'Opération',
      'Quantité',
      'Période',
      'Validation',
    ],
    rows: [
      [
        'Yacine Benali',
        'Chemise Oran',
        'Coupe',
        '250 pièces',
        '20 sept. · 08:00–12:00',
        'Validé',
      ],
      [
        'Nadia Khelifi',
        'Pantalon Casbah',
        'Assemblage',
        '94 pièces',
        '20 sept. · 08:00–16:00',
        'À valider',
      ],
      [
        'Karim Amrani',
        'Veste Aurès',
        'Finition',
        '37 pièces',
        '19 sept. · 13:00–17:00',
        'Validé',
      ],
    ],
  },
}

const pageIcons: Record<TeamPage, typeof Users> = {
  workers: Users,
  assignments: ClipboardList,
  dailyWork: ClipboardCheck,
}

const summaries: Record<TeamPage, SummaryItem[]> = {
  workers: [
    ['Ouvriers actifs', '2', 'Équipe affichée'],
    ['Ouvriers archivés', '1', 'Historique conservé'],
    ['Affectations actives', '2', 'Sur les lots affichés'],
    ['Profils à revoir', '0', 'Cette page'],
  ],
  assignments: [
    ['Affectations actives', '2', 'Sur les lots affichés'],
    ['Opérations couvertes', '3', 'Opérations assignées'],
    ['Lots suivis', '3', 'En production'],
    ['À planifier', '1', 'Affectation'],
  ],
  dailyWork: [
    ['Travail enregistré', '3', 'Saisies affichées'],
    ['Travail validé', '2', '67 % des saisies'],
    ['À valider', '1', 'Par le responsable'],
    ['Modifications tracées', '0', 'Cette page'],
  ],
}

export function TeamView({ page }: { page: TeamPage }) {
  const { t } = useLanguage()
  const content = pageContent[page]

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-7 sm:px-8">
      <Header
        title={content.title}
        subtitle={content.subtitle}
        action={content.action}
        icon={pageIcons[page]}
        actionIcon={Plus}
      />

      <Cards summary={summaries[page]} />

      <DataLayout content={content}>
        {page === 'dailyWork' ? (
          <Card className="mt-5 border-border/80 bg-muted/20 shadow-none">
            <CardContent className="flex flex-wrap items-center gap-4 p-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Edit3 className="size-3.5" />
                {t("Modification conservée dans l'historique")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <XCircle className="size-3.5" />
                {t('Annulation avec motif obligatoire')}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <History className="size-3.5" />
                {t('Travail validé par le responsable')}
              </span>
            </CardContent>
          </Card>
        ) : null}
      </DataLayout>
    </div>
  )
}
