import {
  Activity,
  AlertTriangle,
  ClipboardList,
  PackageCheck,
  PackageOpen,
  ShieldCheck,
  Shirt,
  WalletCards,
} from 'lucide-react'
import type { ChartConfig } from '@/components/ui/chart'

export const productionData = [
  { day: 'Lun', produced: 176, target: 210 },
  { day: 'Mar', produced: 218, target: 210 },
  { day: 'Mer', produced: 201, target: 210 },
  { day: 'Jeu', produced: 245, target: 225 },
  { day: 'Ven', produced: 232, target: 225 },
  { day: 'Sam', produced: 158, target: 165 },
  { day: 'Dim', produced: 184, target: 170 },
]

export const expenseData = [
  { month: 'Avr', materials: 3.9, salaries: 5.2, overhead: 1.4 },
  { month: 'Mai', materials: 4.3, salaries: 5.2, overhead: 1.6 },
  { month: 'Juin', materials: 3.7, salaries: 5.5, overhead: 1.5 },
  { month: 'Juil', materials: 4.8, salaries: 5.5, overhead: 1.7 },
  { month: 'Août', materials: 4.5, salaries: 5.7, overhead: 1.6 },
  { month: 'Sept', materials: 5.1, salaries: 5.7, overhead: 1.8 },
]

export const productionConfig = {
  produced: { label: 'Pièces produites', color: 'var(--chart-production)' },
  target: { label: 'Objectif', color: 'var(--chart-target)' },
} satisfies ChartConfig
export const expenseConfig = {
  materials: { label: 'Matières', color: 'var(--chart-expense-one)' },
  salaries: { label: 'Salaires', color: 'var(--chart-expense-two)' },
  overhead: { label: 'Charges', color: 'var(--chart-expense-three)' },
} satisfies ChartConfig

export const stats = [
  {
    label: 'Chiffre d’affaires',
    value: '4,12 M DA',
    detail: '+12,4 %',
    trend: 'up',
    icon: WalletCards,
    note: 'vs. mois dernier',
  },
  {
    label: 'Commandes en cours',
    value: '34',
    detail: '+5',
    trend: 'up',
    icon: ClipboardList,
    note: 'cette semaine',
  },
  {
    label: 'Production du jour',
    value: '184',
    detail: '92 %',
    trend: 'up',
    icon: Shirt,
    note: 'de l’objectif',
  },
  {
    label: 'Taux de qualité',
    value: '97,8 %',
    detail: '−0,3 %',
    trend: 'down',
    icon: ShieldCheck,
    note: 'vs. semaine passée',
  },
]

export const stockAlerts = [
  {
    name: 'Tissu coton noir',
    ref: 'TIS-CN-024',
    value: 12,
    unit: 'm',
    level: 18,
    critical: true,
  },
  {
    name: 'Fil polyester blanc',
    ref: 'FIL-PB-011',
    value: 8,
    unit: 'bob.',
    level: 26,
  },
  {
    name: 'Fermeture YKK 20 cm',
    ref: 'FER-20-008',
    value: 24,
    unit: 'u.',
    level: 38,
  },
]

export const lots = [
  {
    ref: 'LOT-0924',
    client: 'Maison Oran',
    item: 'Chemises Oxford',
    qty: '320 pièces',
    progress: 78,
    due: '22 sept.',
    status: 'En finition',
  },
  {
    ref: 'LOT-0927',
    client: 'Atelier Casbah',
    item: 'Pantalons cargo',
    qty: '180 pièces',
    progress: 52,
    due: '25 sept.',
    status: 'En assemblage',
  },
  {
    ref: 'LOT-0931',
    client: 'Studio Constantine',
    item: 'Vestes workwear',
    qty: '120 pièces',
    progress: 31,
    due: '29 sept.',
    status: 'En coupe',
  },
  {
    ref: 'LOT-0933',
    client: 'Éditions Blida',
    item: 'Tabliers brodés',
    qty: '250 pièces',
    progress: 16,
    due: '2 oct.',
    status: 'Préparation',
  },
]

export const workers = [
  {
    initials: 'AB',
    name: 'Amel Benali',
    role: 'Piqueuse',
    pieces: 42,
    score: 112,
  },
  {
    initials: 'SL',
    name: 'Sofia Belkacem',
    role: 'Monteuse',
    pieces: 38,
    score: 104,
  },
  {
    initials: 'MK',
    name: 'Moussa Haddad',
    role: 'Coupeur',
    pieces: 35,
    score: 98,
  },
  {
    initials: 'JD',
    name: 'Khadidja Diallo',
    role: 'Finition',
    pieces: 32,
    score: 94,
  },
]

export const activityItems = [
  {
    icon: PackageCheck,
    text: 'Lot LOT-0918 terminé',
    sub: '480 polos · Maison Oran',
    time: 'Il y a 18 min',
    tone: 'success',
  },
  {
    icon: PackageOpen,
    text: 'Réception de matières',
    sub: '125 m de coton sergé',
    time: 'Il y a 1 h',
    tone: 'neutral',
  },
  {
    icon: AlertTriangle,
    text: 'Stock sous le seuil',
    sub: 'Tissu coton noir',
    time: 'Il y a 2 h',
    tone: 'warning',
  },
  {
    icon: Activity,
    text: 'Contrôle qualité validé',
    sub: 'LOT-0921 · 98,6 % conformes',
    time: 'Il y a 3 h',
    tone: 'success',
  },
]
