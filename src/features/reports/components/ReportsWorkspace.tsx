import { BarChart3, Boxes, Factory, Search, Shirt, WalletCards } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";

type ReportPage = "stock" | "production" | "productivity" | "payroll" | "expenses" | "costs";
type ReportData = { title: string; subtitle: string; columns: string[]; rows: string[][] };

const reports: Record<ReportPage, ReportData> = {
  stock: { title: "Stock", subtitle: "Synthèse des quantités, alertes et valorisation du stock.", columns: ["Indicateur", "Valeur", "Période"], rows: [["Valeur du stock", "12,4 M DA", "Sept. 2026"], ["Matières sous le seuil", "7", "Au 20 sept."], ["Mouvements enregistrés", "384", "Mois en cours"]] },
  production: { title: "Production", subtitle: "Synthèse des quantités planifiées, réalisées et rejetées.", columns: ["Lot", "Article", "Planifié", "Réalisé", "Accepté", "Rejeté"], rows: [["LOT-2026-0912", "Chemise Oran", "320", "250", "244", "6"], ["LOT-2026-0911", "Pantalon Casbah", "180", "94", "91", "3"], ["LOT-2026-0909", "Veste Aurès", "120", "37", "36", "1"]] },
  productivity: { title: "Productivité", subtitle: "Comparer le travail validé par ouvrier, article et opération.", columns: ["Ouvrier", "Opération", "Quantité validée", "Lots", "Période"], rows: [["Yacine Benali", "Coupe", "250 pièces", "3", "Sept. 2026"], ["Nadia Khelifi", "Assemblage", "214 pièces", "2", "Sept. 2026"], ["Karim Amrani", "Finition", "178 pièces", "3", "Sept. 2026"]] },
  payroll: { title: "Paie", subtitle: "Synthèse des montants bruts, primes, retenues et nets dus.", columns: ["Période", "Brut", "Primes", "Avances", "Retenues", "Net dû"], rows: [["Septembre 2026", "1 842 500 DA", "86 000 DA", "124 000 DA", "43 200 DA", "1 761 300 DA"], ["Août 2026", "1 798 000 DA", "72 500 DA", "98 000 DA", "67 900 DA", "1 704 600 DA"]] },
  expenses: { title: "Dépenses", subtitle: "Rapport des dépenses par catégorie, période et lot affecté.", columns: ["Catégorie", "Montant", "Dépenses", "Lots affectés", "Part"], rows: [["Matières et fournitures", "426 800 DA", "18", "9", "48 %"], ["Charges", "212 600 DA", "4", "0", "24 %"], ["Transport", "118 400 DA", "7", "6", "13 %"]] },
  costs: { title: "Coûts", subtitle: "Analyse du coût des lots et des dépenses qui leur sont affectées.", columns: ["Lot", "Article", "Coût matières", "Dépenses", "Coût total"], rows: [["LOT-2026-0912", "Chemise Oran", "612 000 DA", "24 800 DA", "636 800 DA"], ["LOT-2026-0911", "Pantalon Casbah", "498 000 DA", "18 500 DA", "516 500 DA"], ["LOT-2026-0909", "Veste Aurès", "540 000 DA", "32 400 DA", "572 400 DA"]] },
};

const icons: Record<ReportPage, LucideIcon> = { stock: Boxes, production: Shirt, productivity: BarChart3, payroll: WalletCards, expenses: WalletCards, costs: Factory };

export function ReportsWorkspace({ page }: { page: ReportPage }) {
  const { t } = useLanguage();
  const report = reports[page];
  const Icon = icons[page];
  const summary = {
    stock: [["Valeur du stock", "12,4 M DA", "Stock disponible"], ["Alertes ouvertes", "7", "2 urgentes"], ["Mouvements", "384", "Mois en cours"], ["Variation", "+4,8 %", "Vs. août"]],
    production: [["Lots suivis", "12", "Période active"], ["Planifié", "620 pièces", "Tous les lots"], ["Accepté", "371 pièces", "97,4 %"], ["Rejeté", "10 pièces", "À traiter"]],
    productivity: [["Ouvriers suivis", "24", "Équipe active"], ["Travail validé", "1 284 pièces", "Mois en cours"], ["Opération principale", "Assemblage", "214 pièces"], ["Variation", "+8,4 %", "Vs. août"]],
    payroll: [["Brut total", "1,84 M DA", "Sept. 2026"], ["Net dû", "1,76 M DA", "Après déductions"], ["Fiches", "24", "Période active"], ["À clôturer", "1 période", "Septembre"]],
    expenses: [["Dépenses", "890 000 DA", "Sept. 2026"], ["Dépenses affectées", "612 400 DA", "19 lots"], ["Catégories", "8", "Actives"], ["Variation", "+6,2 %", "Vs. août"]],
    costs: [["Lots analysés", "12", "Période active"], ["Coût total", "1,72 M DA", "Tous les lots"], ["Coût matières", "1,49 M DA", "Stock consommé"], ["Dépenses affectées", "612 400 DA", "19 affectations"]],
  }[page];
  return <PageShell><div className="space-y-5"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><div className="mb-2 flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary"><Icon className="size-4.5" /></div><h1 className="font-display text-2xl font-bold tracking-tight text-foreground">{t(report.title)}</h1><p className="mt-1 text-sm text-muted-foreground">{t(report.subtitle)}</p></div><Button className="w-fit">{t("Exporter le rapport")}</Button></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{summary.map(([label, value, note]) => <Card key={label} className="border-border/80 shadow-card"><CardContent className="p-4"><p className="text-xs text-muted-foreground">{t(label)}</p><p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{value}</p><p className="mt-1 text-[11px] text-muted-foreground">{t(note)}</p></CardContent></Card>)}</div><Card className="border-border/80 shadow-card"><CardHeader className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><CardTitle>{t(report.title)}</CardTitle><p className="mt-1 text-xs text-muted-foreground">{t("Filtres de période et de domaine")}</p></div><div className="relative w-full sm:w-64"><Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" /><Input className="h-8 pl-8 text-xs" placeholder={t("Rechercher")} /></div></CardHeader><CardContent className="overflow-x-auto p-0"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-muted/40 text-xs text-muted-foreground"><tr>{report.columns.map((column) => <th key={column} className="px-5 py-3 font-medium">{t(column)}</th>)}</tr></thead><tbody>{report.rows.map((row) => <tr key={row[0]} className="border-t border-border/70"><td className="px-5 py-3 font-medium text-foreground">{row[0]}</td>{row.slice(1).map((cell, index) => <td key={`${row[0]}-${index}`} className="px-5 py-3 text-muted-foreground">{cell.includes("%") ? <Badge variant="secondary">{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table></CardContent></Card></div></PageShell>;
}