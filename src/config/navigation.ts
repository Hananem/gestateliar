import {
  Banknote,
  Boxes,
  FileBarChart,
  LayoutDashboard,
  Shirt,
  UserRoundCog,
  Users,
  WalletCards,
} from 'lucide-react'
import type { NavigationItem } from '@/types/navigation'

export const navigation: NavigationItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
 {
  label: 'Stock',
  icon: Boxes,
  path: '/stock',
  children: [
    { label: "Vue d'ensemble", path: '/stock' },
    { label: 'Catalogue des matières', path: '/stock/matieres' },
    { label: 'Entrées de stock', path: '/stock/entrees' },
    { label: 'Inventaire', path: '/stock/inventaire' },
    { label: 'Mouvements de stock', path: '/stock/mouvements' },
    { label: 'Alertes', path: '/stock/alertes' },
  ],
},
 {
  label: 'Production',
  icon: Shirt,
  path: '/production',
  children: [
    { label: "Vue d'ensemble", path: '/production' },
    { label: 'Articles', path: '/production/articles' },
    { label: 'Lots de production', path: '/production/lots' },
    { label: 'Avancement', path: '/production/avancement' },
  ],
},
  {
    label: 'Équipe',
    icon: Users,
    path: '/team',
    children: [
      { label: 'Ouvriers', path: '/team/ouvriers' },
      { label: 'Affectations', path: '/team/affectations' },
      { label: 'Travail quotidien', path: '/team/travail' },
    ],
  },
  {
    label: 'Paie',
    icon: Banknote,
    path: '/payroll',
    children: [
      { label: 'Paie', path: '/payroll' },
      { label: 'Barèmes', path: '/payroll/baremes' },
      { label: 'Avances', path: '/payroll/avances' },
      { label: 'Primes', path: '/payroll/primes' },
      { label: 'Retenues', path: '/payroll/retenues' },
      { label: 'Calcul mensuel', path: '/payroll/calcul-mensuel' },
      { label: 'Clôtures', path: '/payroll/clotures' },
      { label: 'Fiche de paie', path: '/payroll/fiche-de-paie' },
    ],
  },
  {
    label: 'Dépenses',
    icon: WalletCards,
    path: '/expenses',
    children: [
      { label: 'Dépenses', path: '/expenses/depenses' },
      { label: 'Catégories', path: '/expenses/categories' },
      { label: 'Dépenses récurrentes', path: '/expenses/depenses-recurrentes' },
    ],
  },
  {
    label: 'Rapports',
    icon: FileBarChart,
    path: '/reports',
    children: [
      { label: 'Stock', path: '/reports/stock' },
      { label: 'Production', path: '/reports/production' },
      { label: 'Productivité', path: '/reports/productivite' },
      { label: 'Paie', path: '/reports/paie' },
      { label: 'Dépenses', path: '/reports/depenses' },
      { label: 'Coûts', path: '/reports/couts' },
    ],
  },
  {
    label: 'Administration',
    icon: UserRoundCog,
    path: '/admin',
    children: [
      { label: 'Utilisateurs', path: '/admin/utilisateurs' },
      { label: 'Rôles & permissions', path: '/admin/roles-permissions' },
      { label: 'Paramètres', path: '/admin/parametres' },
      { label: 'Audit', path: '/admin/audit' },
    ],
  },
]
