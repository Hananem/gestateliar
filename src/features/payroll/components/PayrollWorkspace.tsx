import {
  Banknote,
  Calculator,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  LockKeyhole,
  Printer,
  Search,
  Settings2,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";

type PayrollPage = "overview" | "rates" | "advances" | "bonuses" | "deductions" | "monthly" | "closures" | "payslip";
type PageData = { title: string; subtitle: string; action: string; columns: string[]; rows: string[][] };

const pages: Record<PayrollPage, PageData> = {
  overview: {
    title: "Paie",
    subtitle: "Préparer, contrôler et suivre les rémunérations mensuelles des ouvriers.",
    action: "Préparer la période",
    columns: ["Ouvrier", "Période", "Brut", "Avances", "Primes", "Retenues", "Net dû", "État"],
    rows: [["Yacine Benali", "Sept. 2026", "86 400 DA", "10 000 DA", "5 000 DA", "0 DA", "81 400 DA", "En préparation"], ["Nadia Khelifi", "Sept. 2026", "72 000 DA", "8 000 DA", "3 500 DA", "2 000 DA", "65 500 DA", "À vérifier"], ["Karim Amrani", "Sept. 2026", "68 500 DA", "0 DA", "2 500 DA", "1 500 DA", "69 500 DA", "En préparation"]],
  },
  rates: {
    title: "Barèmes",
    subtitle: "Gérer les tarifs selon le mode de rémunération enregistré.",
    action: "Ajouter un barème",
    columns: ["Ouvrier", "Mode de paiement", "Tarif", "Période", "Statut"],
    rows: [["Yacine Benali", "À la pièce", "350 DA / pièce acceptée", "Sept. 2026", "Actif"], ["Nadia Khelifi", "À la journée", "2 800 DA / jour", "Sept. 2026", "Actif"], ["Karim Amrani", "Salaire mensuel fixe", "68 500 DA / mois", "Sept. 2026", "Actif"]],
  },
  advances: {
    title: "Avances",
    subtitle: "Enregistrer les avances et la période de paie sur laquelle elles seront déduites.",
    action: "Enregistrer une avance",
    columns: ["Ouvrier", "Montant", "Date", "Motif", "Mois de déduction", "État"],
    rows: [["Yacine Benali", "10 000 DA", "10 sept. 2026", "Avance exceptionnelle", "Sept. 2026", "À déduire"], ["Nadia Khelifi", "8 000 DA", "05 sept. 2026", "Besoin personnel", "Sept. 2026", "À déduire"], ["Sofia Belkacem", "6 000 DA", "28 août 2026", "Avance sur salaire", "Sept. 2026", "Déduite"]],
  },
  bonuses: {
    title: "Primes",
    subtitle: "Enregistrer les primes par ouvrier et par période avec leur motif et leur créateur.",
    action: "Enregistrer une prime",
    columns: ["Ouvrier", "Type", "Montant", "Date", "Motif", "Créée par"],
    rows: [["Yacine Benali", "Rendement", "5 000 DA", "20 sept. 2026", "Objectif du lot atteint", "Fatima Benali"], ["Nadia Khelifi", "Qualité", "3 500 DA", "20 sept. 2026", "Taux de conformité", "Fatima Benali"], ["Karim Amrani", "Ponctualité", "2 500 DA", "19 sept. 2026", "Présence sur la période", "Nadia Khelifi"]],
  },
  deductions: {
    title: "Retenues",
    subtitle: "Enregistrer les retenues appliquées au salaire avec leur motif et leur créateur.",
    action: "Enregistrer une retenue",
    columns: ["Ouvrier", "Type", "Montant", "Date", "Motif", "Créée par"],
    rows: [["Nadia Khelifi", "Correction", "2 000 DA", "20 sept. 2026", "Régularisation validée", "Fatima Benali"], ["Karim Amrani", "Absence", "1 500 DA", "18 sept. 2026", "Journée non validée", "Fatima Benali"], ["Yacine Benali", "Aucune", "0 DA", "20 sept. 2026", "Aucune retenue enregistrée", "Fatima Benali"]],
  },
  monthly: {
    title: "Calcul mensuel",
    subtitle: "Réviser le détail de chaque calcul avant la clôture de la période.",
    action: "Calculer la période",
    columns: ["Ouvrier", "Mode", "Brut", "Primes / régularisations", "Avances", "Retenues", "Net dû"],
    rows: [["Yacine Benali", "À la pièce", "86 400 DA", "+5 000 DA", "-10 000 DA", "-0 DA", "81 400 DA"], ["Nadia Khelifi", "À la journée", "72 000 DA", "+3 500 DA", "-8 000 DA", "-2 000 DA", "65 500 DA"], ["Karim Amrani", "Salaire fixe", "68 500 DA", "+2 500 DA", "-0 DA", "-1 500 DA", "69 500 DA"]],
  },
  closures: {
    title: "Clôtures",
    subtitle: "Fermer une période et conserver une version fixe des calculs de paie.",
    action: "Clôturer septembre",
    columns: ["Période", "Brut total", "Net total", "Salariés", "Clôturée le", "État"],
    rows: [["Septembre 2026", "1 842 500 DA", "1 761 300 DA", "24", "-", "En préparation"], ["Août 2026", "1 798 000 DA", "1 704 600 DA", "23", "31 août 2026", "Clôturée"], ["Juillet 2026", "1 665 400 DA", "1 586 200 DA", "22", "31 juil. 2026", "Clôturée"]],
  },
  payslip: {
    title: "Fiche de paie",
    subtitle: "Consulter et imprimer le relevé interne détaillé d'un ouvrier autorisé.",
    action: "Imprimer / PDF",
    columns: ["Rubrique", "Montant", "Détail"],
    rows: [["Ouvrier", "Yacine Benali", "Septembre 2026 · À la pièce"], ["Agréments bruts", "86 400 DA", "Quantités acceptées × tarif enregistré"], ["Primes et régularisations", "+5 000 DA", "Rendement"], ["Avances", "-10 000 DA", "Avance du 10 sept. 2026"], ["Retenues", "-0 DA", "Aucune"], ["Net dû", "81 400 DA", "Fiche accessible aux utilisateurs autorisés"]],
  },
};

const pageIcons: Record<PayrollPage, typeof Banknote> = { overview: Banknote, rates: Settings2, advances: ClipboardList, bonuses: CheckCircle2, deductions: FileCheck2, monthly: Calculator, closures: LockKeyhole, payslip: FileCheck2 };

export function PayrollWorkspace({ page }: { page: PayrollPage }) {
  const { t } = useLanguage();
  const content = pages[page];
  const Icon = pageIcons[page];
  const summary = {
    overview: [["Ouvriers à calculer", "24", "Période active"], ["Brut total", "1,84 M DA", "Sept. 2026"], ["Net à payer", "1,76 M DA", "Après déductions"], ["À contrôler", "7 fiches", "Avant clôture"]],
    rates: [["Barèmes actifs", "24", "Ouvriers concernés"], ["À la pièce", "12", "Tarifs enregistrés"], ["À la journée", "8", "Tarifs enregistrés"], ["Salaire fixe", "4", "Tarifs enregistrés"]],
    advances: [["Avances période", "18", "Sept. 2026"], ["Montant à déduire", "124 000 DA", "Période active"], ["Déjà déduites", "86 000 DA", "Calcul mensuel"], ["À vérifier", "2", "Enregistrements"]],
    bonuses: [["Primes période", "16", "Sept. 2026"], ["Montant total", "86 000 DA", "Période active"], ["Rendement", "9", "Primes enregistrées"], ["Qualité", "5", "Primes enregistrées"]],
    deductions: [["Retenues période", "9", "Sept. 2026"], ["Montant total", "43 200 DA", "Période active"], ["Corrections", "4", "Retenues enregistrées"], ["À vérifier", "1", "Enregistrement"]],
    monthly: [["Fiches calculées", "24", "Sept. 2026"], ["Brut calculé", "1,84 M DA", "Période active"], ["Net calculé", "1,76 M DA", "Après déductions"], ["À réviser", "7 fiches", "Avant clôture"]],
    closures: [["Périodes ouvertes", "1", "Sept. 2026"], ["Périodes clôturées", "2", "Juillet - août"], ["Dernier net clôturé", "1,70 M DA", "Août 2026"], ["Corrections tracées", "3", "Après clôture"]],
    payslip: [["Ouvrier sélectionné", "Yacine Benali", "Sept. 2026"], ["Rémunération brute", "86 400 DA", "Quantités acceptées"], ["Déductions", "10 000 DA", "Avance"], ["Net dû", "81 400 DA", "Fiche prête"]],
  }[page];
  return <PageShell><div className="space-y-5">
    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><div className="mb-2 flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary"><Icon className="size-4.5" /></div><h1 className="font-display text-2xl font-bold tracking-tight text-foreground">{t(content.title)}</h1><p className="mt-1 text-sm text-muted-foreground">{t(content.subtitle)}</p></div><Button className="w-fit gap-2">{page === "payslip" ? <Printer className="size-4" /> : null}{t(content.action)}</Button></div>
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{summary.map(([label, value, note]) => <Card key={label} className="border-border/80 shadow-card"><CardContent className="p-4"><p className="text-xs text-muted-foreground">{t(label)}</p><p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{value}</p><p className="mt-1 text-[11px] text-muted-foreground">{t(note)}</p></CardContent></Card>)}</div>
    <Card className="border-border/80 shadow-card"><CardHeader className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><CardTitle>{t(content.title)}</CardTitle><p className="mt-1 text-xs text-muted-foreground">{t("Données actualisées à 08:02")}</p></div><div className="relative w-full sm:w-64"><Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" /><Input className="h-8 pl-8 text-xs" placeholder={t("Rechercher")} /></div></CardHeader><CardContent className="overflow-x-auto p-0"><table className="w-full min-w-[820px] text-left text-sm"><thead className="bg-muted/40 text-xs text-muted-foreground"><tr>{content.columns.map((column) => <th key={column} className="px-5 py-3 font-medium">{t(column)}</th>)}</tr></thead><tbody>{content.rows.map((row) => <tr key={row[0]} className="border-t border-border/70"><td className="px-5 py-3 font-medium text-foreground">{row[0]}</td>{row.slice(1).map((cell, index) => <td key={`${row[0]}-${index}`} className="px-5 py-3 text-muted-foreground">{(cell === "Clôturée" || cell === "En préparation" || cell === "À vérifier" || cell === "Validé") ? <Badge variant={cell === "Clôturée" || cell === "Validé" ? "default" : "secondary"}>{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table></CardContent></Card>
    {page === "monthly" ? <Card className="border-border/80 bg-muted/20 shadow-none"><CardContent className="p-4 text-sm text-muted-foreground"><strong className="text-foreground">{t("Net = brut + primes + régularisations positives − avances − retenues")}</strong><p className="mt-1 text-xs">{t("À la pièce : quantités acceptées uniquement × tarif enregistré · À la journée : jours validés · Au mois : salaire fixe de la période")}</p></CardContent></Card> : null}
    {page === "payslip" ? <Card className="border-border/80 bg-muted/20 shadow-none"><CardContent className="flex items-center gap-2 p-4 text-xs text-muted-foreground"><Users className="size-4" />{t("Consultation et impression réservées aux utilisateurs autorisés")}</CardContent></Card> : null}
  </div></PageShell>;
}