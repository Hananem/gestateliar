import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ClipboardCheck,
  History,
  PackageCheck,
  Plus,
  RotateCcw,
  Search,
  TriangleAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/layout/PageShell";
import { useLanguage } from "@/lib/i18n";

type StockPage =
  | "overview"
  | "materials"
  | "rolls"
  | "receipts"
  | "issues"
  | "returns"
  | "inventory"
  | "movements"
  | "valuation"
  | "alerts";

const pageContent: Record<StockPage, { title: string; subtitle: string; action: string; columns: string[]; rows: string[][] }> = {
  overview: {
    title: "Vue d'ensemble",
    subtitle: "Suivi des quantités disponibles, des alertes et des mouvements récents.",
    action: "Nouvelle réception",
    columns: ["Indicateur", "Valeur", "Évolution"],
    rows: [["Matières disponibles", "248 références", "+12 ce mois"], ["Rouleaux actifs", "86 rouleaux", "14 proches du seuil"], ["Lots de production", "12 en cours", "Dernier mouvement il y a 18 min"]],
  },
  materials: {
    title: "Matières & accessoires",
    subtitle: "Référentiel des tissus, accessoires, prix et seuils de réapprovisionnement.",
    action: "Ajouter une matière",
    columns: ["Matière", "Couleur / unité", "Fournisseur", "Stock", "Seuil"],
    rows: [["Jersey coton 180g", "Noir / m", "Tissus El Djazair", "1 240 m", "500 m"], ["Fil polyester 120", "Blanc / bobine", "Filature de Tlemcen", "84 bobines", "30"], ["Bouton nacré 12 mm", "Ivoire / pièce", "Accessoires El Bahja", "2 460 p", "1 000"]],
  },
  rolls: {
    title: "Rouleaux & lots fournisseurs",
    subtitle: "Traçabilité de chaque rouleau, de sa réception jusqu'à son utilisation.",
    action: "Enregistrer un rouleau",
    columns: ["Rouleau", "Matière", "Longueur", "Fournisseur", "Réception"],
    rows: [["RL-2026-041", "Jersey coton noir", "120 m / 74 m", "Tissus El Djazair", "18 sept. 2026"], ["RL-2026-039", "Popeline blanche", "90 m / 12 m", "Tissages de Sétif", "16 sept. 2026"], ["RL-2026-035", "Lycra bleu nuit", "65 m / 8 m", "Tissus El Djazair", "12 sept. 2026"]],
  },
  receipts: {
    title: "Réceptions",
    subtitle: "Enregistrer les entrées, leurs documents justificatifs et la mise à jour du stock.",
    action: "Nouvelle réception",
    columns: ["Référence", "Fournisseur", "Matière", "Quantité", "Date"],
    rows: [["REC-260920-018", "Tissus El Djazair", "Jersey coton noir", "240 m", "20 sept. 2026"], ["REC-260919-017", "Filature de Tlemcen", "Fil polyester 120", "40 bobines", "19 sept. 2026"], ["REC-260918-016", "Accessoires El Bahja", "Bouton nacré 12 mm", "1 200 pièces", "18 sept. 2026"]],
  },
  issues: {
    title: "Sorties vers production",
    subtitle: "Préparer et contrôler les matières affectées aux lots de production.",
    action: "Enregistrer une sortie",
    columns: ["Lot de production", "Matière / rouleau", "Quantité", "Réceptionné par", "Statut"],
    rows: [["LOT-2026-0912", "Jersey noir / RL-041", "46 m", "Yacine B.", "Validé"], ["LOT-2026-0911", "Fil polyester / -", "8 bobines", "Nadia K.", "En attente"], ["LOT-2026-0909", "Popeline blanche / RL-039", "38 m", "Karim A.", "Validé"]],
  },
  returns: {
    title: "Retours d'atelier",
    subtitle: "Réconcilier les matières retournées avec la sortie d'origine et leur état.",
    action: "Enregistrer un retour",
    columns: ["Retour", "Sortie d'origine", "Matière", "Quantité", "État"],
    rows: [["RET-260920-004", "SOR-260919-031", "Jersey coton noir", "6,5 m", "Réutilisable"], ["RET-260919-003", "SOR-260918-028", "Fil polyester 120", "2 bobines", "À contrôler"], ["RET-260917-002", "SOR-260916-021", "Popeline blanche", "3 m", "Déclassée"]],
  },
  inventory: {
    title: "Inventaires",
    subtitle: "Comparer le stock physique au stock système et approuver les ajustements.",
    action: "Créer un inventaire",
    columns: ["Inventaire", "Périmètre", "Références", "Écart", "Statut"],
    rows: [["INV-2026-09-A", "Tissus", "42 / 42", "-18,5 m", "À approuver"], ["INV-2026-09-B", "Accessoires", "96 / 96", "+34 pièces", "Terminé"], ["INV-2026-08-C", "Partiel - fils", "18 / 20", "2 références", "En cours"]],
  },
  movements: {
    title: "Historique des mouvements",
    subtitle: "Rechercher les entrées, sorties, retours, pertes et ajustements.",
    action: "Exporter l'historique",
    columns: ["Date", "Type", "Matière", "Quantité", "Utilisateur"],
    rows: [["20 sept. · 08:01", "Sortie", "Jersey coton noir", "-46 m", "Fatima M."], ["20 sept. · 07:42", "Réception", "Jersey coton noir", "+240 m", "Nadia K."], ["19 sept. · 16:18", "Retour", "Fil polyester 120", "+2 bobines", "Yacine B."]],
  },
  valuation: {
    title: "Valorisation du stock",
    subtitle: "Estimation de la valeur du stock selon le prix d'achat de référence.",
    action: "Exporter la valorisation",
    columns: ["Matière", "Quantité", "Prix de référence", "Valeur estimée", "Part"],
    rows: [["Jersey coton noir", "1 240 m", "2 450 DA / m", "3 038 000 DA", "42 %"], ["Popeline blanche", "680 m", "1 880 DA / m", "1 278 400 DA", "18 %"], ["Accessoires divers", "12 840 pièces", "115 DA / pièce", "1 476 600 DA", "20 %"]],
  },
  alerts: {
    title: "Alertes de stock",
    subtitle: "Prioriser les matières sous le seuil, épuisées ou proches de la fin de rouleau.",
    action: "Configurer les seuils",
    columns: ["Matière / rouleau", "Quantité actuelle", "Seuil d'alerte", "Fournisseur", "Priorité"],
    rows: [["Lycra bleu nuit", "8 m", "20 m", "Tissus El Djazair", "Urgente"], ["Fil polyester 120", "28 bobines", "30 bobines", "Filature de Tlemcen", "À surveiller"], ["RL-2026-039 · Popeline", "12 m", "15 m", "Tissages de Sétif", "Rouleau faible"]],
  },
};

const pageIcons: Record<StockPage, typeof PackageCheck> = {
  overview: PackageCheck,
  materials: PackageCheck,
  rolls: PackageCheck,
  receipts: ArrowDownToLine,
  issues: ArrowUpFromLine,
  returns: RotateCcw,
  inventory: ClipboardCheck,
  movements: History,
  valuation: PackageCheck,
  alerts: TriangleAlert,
};

export function StockWorkspace({ page }: { page: StockPage }) {
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
        <Button className="w-fit gap-2"><Plus className="size-4" />{t(content.action)}</Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[["Stock total", "58 420 unités", "Toutes les références"], ["Valeur estimée", "12,4 M DA", "+4,8 % ce mois"], ["Sous le seuil", "7 matières", "2 urgentes"], ["Mouvements aujourd'hui", "18", "Dernier à 08:01"]].map(([label, value, note]) => (
          <Card key={label} className="border-border/80 shadow-card"><CardContent className="p-4"><p className="text-xs text-muted-foreground">{t(label)}</p><p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{value}</p><p className="mt-1 text-[11px] text-muted-foreground">{t(note)}</p></CardContent></Card>
        ))}
      </div>

      <Card className="border-border/80 shadow-card">
        <CardHeader className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div><CardTitle>{t(content.title)}</CardTitle><p className="mt-1 text-xs text-muted-foreground">{t("Données actualisées à 08:02")}</p></div>
          <div className="relative w-full sm:w-64"><Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" /><Input className="h-8 pl-8 text-xs" placeholder={t("Rechercher")} /></div>
        </CardHeader>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-muted/40 text-xs text-muted-foreground"><tr>{content.columns.map((column) => <th key={column} className="px-5 py-3 font-medium">{t(column)}</th>)}</tr></thead><tbody>{content.rows.map((row) => <tr key={row[0]} className="border-t border-border/70"><td className="px-5 py-3 font-medium text-foreground">{row[0]}</td>{row.slice(1).map((cell, index) => <td key={`${row[0]}-${index}`} className="px-5 py-3 text-muted-foreground">{index === row.length - 2 ? <Badge variant={cell === "Urgente" ? "destructive" : "secondary"}>{cell}</Badge> : cell}</td>)}</tr>)}</tbody></table>
        </CardContent>
      </Card>
      </div>
    </PageShell>
  );
}