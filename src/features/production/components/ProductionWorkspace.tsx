import {
  ClipboardCheck,
  ClipboardList,
  Factory,
  Gauge,
  PackageCheck,
  Scissors,
  Search,
  Shirt,
  TriangleAlert,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";

type ProductionPage = "overview" | "articles" | "operations" | "lots" | "consumption" | "progress" | "rejects";

const pageContent: Record<ProductionPage, { title: string; subtitle: string; action: string; columns: string[]; rows: string[][] }> = {
  overview: {
    title: "Production",
    subtitle: "Pilotage des articles, des lots et des étapes de fabrication.",
    action: "Créer un lot",
    columns: ["Indicateur", "Valeur", "Détail"],
    rows: [["Lots en cours", "12", "4 à terminer cette semaine"], ["Production du jour", "184 pièces", "92 % de l'objectif"], ["Taux de rejet", "2,4 %", "-0,6 % ce mois"]],
  },
  articles: {
    title: "Articles",
    subtitle: "Référentiel des produits, variantes, consommations théoriques et opérations.",
    action: "Ajouter un article",
    columns: ["Référence", "Modèle", "Couleur / taille", "Objectif", "Consommation théorique"],
    rows: [["ART-CH-001", "Chemise Oran", "Blanc / M", "320 pièces", "1,45 m tissu · 8 boutons"], ["ART-PC-014", "Pantalon Casbah", "Beige / 42", "180 pièces", "1,80 m tissu · 1 zip"], ["ART-VW-008", "Veste Aurès", "Bleu nuit / L", "120 pièces", "2,40 m tissu · 12 boutons"]],
  },
  operations: {
    title: "Opérations",
    subtitle: "Définir les étapes de fabrication et la tarification de chaque opération.",
    action: "Ajouter une opération",
    columns: ["Opération", "Atelier", "Tarif unitaire", "Durée standard", "Articles liés"],
    rows: [["Coupe", "Coupe", "85 DA / pièce", "6 min", "18 articles"], ["Assemblage", "Confection", "240 DA / pièce", "22 min", "24 articles"], ["Finition & contrôle", "Finition", "110 DA / pièce", "9 min", "24 articles"], ["Emballage", "Expédition", "45 DA / pièce", "3 min", "16 articles"]],
  },
  lots: {
    title: "Lots de production",
    subtitle: "Suivre les quantités planifiées, les responsables et les dates cibles.",
    action: "Créer un lot",
    columns: ["Lot", "Article", "Planifié", "Début / échéance", "Responsable", "Avancement"],
    rows: [["LOT-2026-0912", "Chemise Oran", "320 pièces", "18 sept. / 22 sept.", "Yacine Benali", "78 %"], ["LOT-2026-0911", "Pantalon Casbah", "180 pièces", "17 sept. / 25 sept.", "Nadia Khelifi", "52 %"], ["LOT-2026-0909", "Veste Aurès", "120 pièces", "15 sept. / 29 sept.", "Karim Amrani", "31 %"]],
  },
  consumption: {
    title: "Consommation",
    subtitle: "Comparer la consommation réelle aux besoins théoriques de chaque lot.",
    action: "Saisir une consommation",
    columns: ["Lot", "Matière", "Théorique", "Réelle", "Écart", "Sortie stock"],
    rows: [["LOT-2026-0912", "Jersey coton blanc", "464 m", "471 m", "+7 m", "SOR-260918-031"], ["LOT-2026-0911", "Tissu sergé beige", "324 m", "318 m", "-6 m", "SOR-260917-028"], ["LOT-2026-0909", "Lycra bleu nuit", "288 m", "294 m", "+6 m", "SOR-260915-021"]],
  },
  progress: {
    title: "Avancement",
    subtitle: "Suivre les quantités produites, acceptées et rejetées par lot.",
    action: "Saisir un avancement",
    columns: ["Lot", "Planifié", "Réalisé", "Accepté", "Rejeté", "Progression"],
    rows: [["LOT-2026-0912", "320", "250", "244", "6", "78 %"], ["LOT-2026-0911", "180", "94", "91", "3", "52 %"], ["LOT-2026-0909", "120", "37", "36", "1", "31 %"]],
  },
  rejects: {
    title: "Rejets",
    subtitle: "Enregistrer les pièces non conformes et décider de leur traitement.",
    action: "Enregistrer un rejet",
    columns: ["Référence", "Lot", "Article", "Quantité", "Motif", "Traitement"],
    rows: [["REJ-2026-018", "LOT-2026-0912", "Chemise Oran", "6 pièces", "Défaut de couture", "À corriger"], ["REJ-2026-017", "LOT-2026-0911", "Pantalon Casbah", "3 pièces", "Tache tissu", "Non payée"], ["REJ-2026-016", "LOT-2026-0909", "Veste Aurès", "1 pièce", "Erreur de mesure", "Payée partiellement"]],
  },
};

const pageIcons: Record<ProductionPage, typeof Factory> = {
  overview: Factory,
  articles: Shirt,
  operations: Scissors,
  lots: ClipboardList,
  consumption: PackageCheck,
  progress: Gauge,
  rejects: TriangleAlert,
};

export function ProductionWorkspace({ page }: { page: ProductionPage }) {
  const { t } = useLanguage();
  const content = pageContent[page];
  const Icon = pageIcons[page];

  return (
    <PageShell>
      <div className="space-y-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary"><Icon className="size-4.5" /></div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">{t(content.title)}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t(content.subtitle)}</p>
          </div>
          <Button className="w-fit">{t(content.action)}</Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[["Lots actifs", "12", "4 échéances cette semaine"], ["Pièces produites", "184", "Aujourd'hui"], ["Taux d'acceptation", "97,6 %", "+1,2 % ce mois"], ["Rejets à traiter", "10", "6 à corriger"]].map(([label, value, note]) => <Card key={label} className="border-border/80 shadow-card"><CardContent className="p-4"><p className="text-xs text-muted-foreground">{t(label)}</p><p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{value}</p><p className="mt-1 text-[11px] text-muted-foreground">{t(note)}</p></CardContent></Card>)}
        </div>
        <Card className="border-border/80 shadow-card">
          <CardHeader className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><CardTitle>{t(content.title)}</CardTitle><p className="mt-1 text-xs text-muted-foreground">{t("Données actualisées à 08:02")}</p></div><div className="relative w-full sm:w-64"><Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" /><Input className="h-8 pl-8 text-xs" placeholder={t("Rechercher")} /></div></CardHeader>
          <CardContent className="overflow-x-auto p-0"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-muted/40 text-xs text-muted-foreground"><tr>{content.columns.map((column) => <th key={column} className="px-5 py-3 font-medium">{t(column)}</th>)}</tr></thead><tbody>{content.rows.map((row) => <tr key={row[0]} className="border-t border-border/70"><td className="px-5 py-3 font-medium text-foreground">{row[0]}</td>{row.slice(1).map((cell, index) => <td key={`${row[0]}-${index}`} className="px-5 py-3 text-muted-foreground">{(cell.includes("%") || cell === "À corriger" || cell === "Non payée" || cell === "Payée partiellement") ? <Badge variant={cell === "Non payée" ? "destructive" : "secondary"}>{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table></CardContent>
        </Card>
      </div>
    </PageShell>
  );
}