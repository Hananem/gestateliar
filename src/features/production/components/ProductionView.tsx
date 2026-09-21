import {
  ClipboardList,
  Factory,
  Gauge,
  PackageCheck,
  Plus,
  Scissors,
  Shirt,
  TriangleAlert,
} from 'lucide-react'
import { Header } from '@/features/_shared/Header'
import { Cards } from '@/features/_shared/Cards'
import { DataLayout } from '@/features/_shared/DataLayout'
import type { ProductionPage, ProductionPageData } from '@/types/production'
import type { SummaryItem } from '@/types/shared'

const pageContent: Record<ProductionPage, ProductionPageData> = {
  overview: {
    title: 'Production',
    subtitle: 'Pilotage des articles, des lots et des étapes de fabrication.',
    action: 'Créer un lot',
    columns: ['Indicateur', 'Valeur', 'Détail'],
    rows: [
      ['Lots en cours', '12', '4 à terminer cette semaine'],
      ['Production du jour', '184 pièces', "92 % de l'objectif"],
      ['Taux de rejet', '2,4 %', '-0,6 % ce mois'],
    ],
  },
  articles: {
    title: 'Articles',
    subtitle:
      'Référentiel des produits, variantes, consommations théoriques et opérations.',
    action: 'Ajouter un article',
    columns: [
      'Référence',
      'Modèle',
      'Couleur / taille',
      'Objectif',
      'Consommation théorique',
    ],
    rows: [
      [
        'ART-CH-001',
        'Chemise Oran',
        'Blanc / M',
        '320 pièces',
        '1,45 m tissu · 8 boutons',
      ],
      [
        'ART-PC-014',
        'Pantalon Casbah',
        'Beige / 42',
        '180 pièces',
        '1,80 m tissu · 1 zip',
      ],
      [
        'ART-VW-008',
        'Veste Aurès',
        'Bleu nuit / L',
        '120 pièces',
        '2,40 m tissu · 12 boutons',
      ],
    ],
  },
  operations: {
    title: 'Opérations',
    subtitle:
      'Définir les étapes de fabrication et la tarification de chaque opération.',
    action: 'Ajouter une opération',
    columns: [
      'Opération',
      'Atelier',
      'Tarif unitaire',
      'Durée standard',
      'Articles liés',
    ],
    rows: [
      ['Coupe', 'Coupe', '85 DA / pièce', '6 min', '18 articles'],
      ['Assemblage', 'Confection', '240 DA / pièce', '22 min', '24 articles'],
      [
        'Finition & contrôle',
        'Finition',
        '110 DA / pièce',
        '9 min',
        '24 articles',
      ],
      ['Emballage', 'Expédition', '45 DA / pièce', '3 min', '16 articles'],
    ],
  },
  lots: {
    title: 'Lots de production',
    subtitle:
      'Suivre les quantités planifiées, les responsables et les dates cibles.',
    action: 'Créer un lot',
    columns: [
      'Lot',
      'Article',
      'Planifié',
      'Début / échéance',
      'Responsable',
      'Avancement',
    ],
    rows: [
      [
        'LOT-2026-0912',
        'Chemise Oran',
        '320 pièces',
        '18 sept. / 22 sept.',
        'Yacine Benali',
        '78 %',
      ],
      [
        'LOT-2026-0911',
        'Pantalon Casbah',
        '180 pièces',
        '17 sept. / 25 sept.',
        'Nadia Khelifi',
        '52 %',
      ],
      [
        'LOT-2026-0909',
        'Veste Aurès',
        '120 pièces',
        '15 sept. / 29 sept.',
        'Karim Amrani',
        '31 %',
      ],
    ],
  },
  consumption: {
    title: 'Consommation',
    subtitle:
      'Comparer la consommation réelle aux besoins théoriques de chaque lot.',
    action: 'Saisir une consommation',
    columns: ['Lot', 'Matière', 'Théorique', 'Réelle', 'Écart', 'Sortie stock'],
    rows: [
      [
        'LOT-2026-0912',
        'Jersey coton blanc',
        '464 m',
        '471 m',
        '+7 m',
        'SOR-260918-031',
      ],
      [
        'LOT-2026-0911',
        'Tissu sergé beige',
        '324 m',
        '318 m',
        '-6 m',
        'SOR-260917-028',
      ],
      [
        'LOT-2026-0909',
        'Lycra bleu nuit',
        '288 m',
        '294 m',
        '+6 m',
        'SOR-260915-021',
      ],
    ],
  },
  progress: {
    title: 'Avancement',
    subtitle: 'Suivre les quantités produites, acceptées et rejetées par lot.',
    action: 'Saisir un avancement',
    columns: ['Lot', 'Planifié', 'Réalisé', 'Accepté', 'Rejeté', 'Progression'],
    rows: [
      ['LOT-2026-0912', '320', '250', '244', '6', '78 %'],
      ['LOT-2026-0911', '180', '94', '91', '3', '52 %'],
      ['LOT-2026-0909', '120', '37', '36', '1', '31 %'],
    ],
  },
  rejects: {
    title: 'Rejets',
    subtitle:
      'Enregistrer les pièces non conformes et décider de leur traitement.',
    action: 'Enregistrer un rejet',
    columns: ['Référence', 'Lot', 'Article', 'Quantité', 'Motif', 'Traitement'],
    rows: [
      [
        'REJ-2026-018',
        'LOT-2026-0912',
        'Chemise Oran',
        '6 pièces',
        'Défaut de couture',
        'À corriger',
      ],
      [
        'REJ-2026-017',
        'LOT-2026-0911',
        'Pantalon Casbah',
        '3 pièces',
        'Tache tissu',
        'Non payée',
      ],
      [
        'REJ-2026-016',
        'LOT-2026-0909',
        'Veste Aurès',
        '1 pièce',
        'Erreur de mesure',
        'Payée partiellement',
      ],
    ],
  },
}

const pageIcons: Record<ProductionPage, typeof Factory> = {
  overview: Factory,
  articles: Shirt,
  operations: Scissors,
  lots: ClipboardList,
  consumption: PackageCheck,
  progress: Gauge,
  rejects: TriangleAlert,
}

const summaries: Record<ProductionPage, SummaryItem[]> = {
  overview: [
    ['Lots actifs', '12', '4 échéances cette semaine'],
    ['Pièces produites', '184', "Aujourd'hui"],
    ["Taux d'acceptation", '97,6 %', '+1,2 % ce mois'],
    ['Rejets à traiter', '10', '6 à corriger'],
  ],
  articles: [
    ['Articles actifs', '24', 'Référentiel'],
    ['Modèles configurés', '18', 'Avec opérations'],
    ['Consommation définie', '22', 'Articles complets'],
    ['À compléter', '2', 'Fiches article'],
  ],
  operations: [
    ['Opérations actives', '16', 'Dans les ateliers'],
    ['Tarifs définis', '16', '100 % configurés'],
    ['Articles liés', '24', 'Référentiel'],
    ['À revoir', '2', 'Tarifs à confirmer'],
  ],
  lots: [
    ['Lots actifs', '12', 'En production'],
    ['Pièces planifiées', '620', 'Tous les lots'],
    ['Pièces réalisées', '381', '61 % du plan'],
    ['Échéances proches', '4', 'Cette semaine'],
  ],
  consumption: [
    ['Lots suivis', '12', 'En production'],
    ['Matières consommées', '2 680 unités', 'Sorties liées'],
    ['Écart moyen', '+1,8 %', 'Vs. théorique'],
    ['Écarts à revoir', '3', 'Au-dessus du théorique'],
  ],
  progress: [
    ['Lots suivis', '12', 'Avancement enregistré'],
    ['Planifié', '620 pièces', 'Période active'],
    ['Accepté', '371 pièces', '97,4 % réalisé'],
    ['Rejeté', '10 pièces', 'À traiter'],
  ],
  rejects: [
    ['Rejets période', '10 pièces', 'Depuis le 1er sept.'],
    ['À corriger', '6', 'Retour atelier'],
    ['Non payés', '3', 'Règle appliquée'],
    ['Payés partiellement', '1', 'À documenter'],
  ],
}

export function ProductionView({ page }: { page: ProductionPage }) {
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

      <DataLayout content={content} />
    </div>
  )
}
