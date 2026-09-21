import {
  ClipboardCheck,
  ClipboardList,
  Edit3,
  History,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";

type TeamPage = "workers" | "assignments" | "dailyWork";

const pageContent: Record<TeamPage, { title: string; subtitle: string; action: string; columns: string[]; rows: string[][] }> = {
  workers: {
    title: "Ouvriers",
    subtitle: "Créer, consulter, modifier et archiver les travailleurs de l'atelier.",
    action: "Créer un ouvrier",
    columns: ["Ouvrier", "Statut", "Actions"],
    rows: [["Yacine Benali", "Actif", "Voir · Modifier · Archiver"], ["Nadia Khelifi", "Actif", "Voir · Modifier · Archiver"], ["Karim Amrani", "Archivé", "Voir · Modifier"]],
  },
  assignments: {
    title: "Affectations",
    subtitle: "Distribuer les ouvriers sur les opérations et suivre les lots de production.",
    action: "Créer une affectation",
    columns: ["Ouvrier", "Opération", "Lot de production", "Statut"],
    rows: [["Yacine Benali", "Coupe", "LOT-2026-0912", "En cours"], ["Nadia Khelifi", "Assemblage", "LOT-2026-0911", "En cours"], ["Karim Amrani", "Finition & contrôle", "LOT-2026-0909", "Planifiée"]],
  },
  dailyWork: {
    title: "Travail quotidien",
    subtitle: "Enregistrer et valider le travail réalisé par ouvrier, article, opération, quantité et période.",
    action: "Enregistrer un travail",
    columns: ["Ouvrier", "Article", "Opération", "Quantité", "Période", "Validation"],
    rows: [["Yacine Benali", "Chemise Oran", "Coupe", "250 pièces", "20 sept. · 08:00–12:00", "Validé"], ["Nadia Khelifi", "Pantalon Casbah", "Assemblage", "94 pièces", "20 sept. · 08:00–16:00", "À valider"], ["Karim Amrani", "Veste Aurès", "Finition", "37 pièces", "19 sept. · 13:00–17:00", "Validé"]],
  },
};

const pageIcons: Record<TeamPage, typeof Users> = {
  workers: Users,
  assignments: ClipboardList,
  dailyWork: ClipboardCheck,
};

export function TeamWorkspace({ page }: { page: TeamPage }) {
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
          {[["Ouvriers actifs", "24", "Équipe actuelle"], ["Affectations actives", "18", "Sur les lots en cours"], ["Travail à valider", "7", "Saisies du jour"], ["Modifications tracées", "12", "Cette semaine"]].map(([label, value, note]) => <Card key={label} className="border-border/80 shadow-card"><CardContent className="p-4"><p className="text-xs text-muted-foreground">{t(label)}</p><p className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{value}</p><p className="mt-1 text-[11px] text-muted-foreground">{t(note)}</p></CardContent></Card>)}
        </div>

        <Card className="border-border/80 shadow-card">
          <CardHeader className="flex flex-col gap-3 border-b border-border/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><CardTitle>{t(content.title)}</CardTitle><p className="mt-1 text-xs text-muted-foreground">{t("Données actualisées à 08:02")}</p></div><div className="relative w-full sm:w-64"><Input className="h-8 text-xs" placeholder={t("Rechercher")} /></div></CardHeader>
          <CardContent className="overflow-x-auto p-0"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-muted/40 text-xs text-muted-foreground"><tr>{content.columns.map((column) => <th key={column} className="px-5 py-3 font-medium">{t(column)}</th>)}</tr></thead><tbody>{content.rows.map((row) => <tr key={row[0]} className="border-t border-border/70"><td className="px-5 py-3 font-medium text-foreground">{row[0]}</td>{row.slice(1).map((cell, index) => <td key={`${row[0]}-${index}`} className="px-5 py-3 text-muted-foreground">{page === "workers" && index === 0 ? <Badge variant={cell === "Archivé" ? "secondary" : "default"}>{cell}</Badge> : page === "dailyWork" && index === row.length - 2 ? <Badge variant={cell === "Validé" ? "default" : "secondary"}>{cell}</Badge> : page === "workers" && index === 1 ? <span className="inline-flex items-center gap-1 text-xs"><UserRound className="size-3.5" />{cell}</span> : cell}</td>)}</tr>)}</tbody></table></CardContent>
        </Card>

        {page === "dailyWork" ? <Card className="border-border/80 bg-muted/20 shadow-none"><CardContent className="flex flex-wrap items-center gap-4 p-4 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Edit3 className="size-3.5" />{t("Modification conservée dans l'historique")}</span><span className="inline-flex items-center gap-1.5"><XCircle className="size-3.5" />{t("Annulation avec motif obligatoire")}</span><span className="inline-flex items-center gap-1.5"><History className="size-3.5" />{t("Travail validé par le responsable")}</span></CardContent></Card> : null}
      </div>
    </PageShell>
  );
}