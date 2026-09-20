import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  Archive,
  Banknote,
  Bell,
  Boxes,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileBarChart,
  LayoutDashboard,
  PackageCheck,
  PackageOpen,
  Search,
  Settings,
  ShieldCheck,
  Shirt,
  TrendingDown,
  TrendingUp,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tableau de bord — GESTATELIER" },
      {
        name: "description",
        content: "Pilotage de la production, des stocks et des performances de l’atelier GESTATELIER.",
      },
      { property: "og:title", content: "Tableau de bord — GESTATELIER" },
      {
        property: "og:description",
        content: "Vue opérationnelle de l’atelier de confection GESTATELIER.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Stock", icon: Boxes, badge: "3" },
  { label: "Production", icon: Shirt },
  { label: "Équipe", icon: Users },
  { label: "Paie", icon: Banknote },
  { label: "Dépenses", icon: WalletCards },
  { label: "Rapports", icon: FileBarChart },
  { label: "Administration", icon: UserRoundCog },
];

const productionData = [
  { day: "Lun", produced: 176, target: 210 },
  { day: "Mar", produced: 218, target: 210 },
  { day: "Mer", produced: 201, target: 210 },
  { day: "Jeu", produced: 245, target: 225 },
  { day: "Ven", produced: 232, target: 225 },
  { day: "Sam", produced: 158, target: 165 },
  { day: "Dim", produced: 184, target: 170 },
];

const expenseData = [
  { month: "Avr", materials: 3.9, salaries: 5.2, overhead: 1.4 },
  { month: "Mai", materials: 4.3, salaries: 5.2, overhead: 1.6 },
  { month: "Juin", materials: 3.7, salaries: 5.5, overhead: 1.5 },
  { month: "Juil", materials: 4.8, salaries: 5.5, overhead: 1.7 },
  { month: "Août", materials: 4.5, salaries: 5.7, overhead: 1.6 },
  { month: "Sept", materials: 5.1, salaries: 5.7, overhead: 1.8 },
];

const productionConfig = {
  produced: { label: "Pièces produites", color: "var(--chart-production)" },
  target: { label: "Objectif", color: "var(--chart-target)" },
} satisfies ChartConfig;

const expenseConfig = {
  materials: { label: "Matières", color: "var(--chart-expense-one)" },
  salaries: { label: "Salaires", color: "var(--chart-expense-two)" },
  overhead: { label: "Charges", color: "var(--chart-expense-three)" },
} satisfies ChartConfig;

const stats = [
  {
    label: "Chiffre d’affaires",
    value: "28 640 €",
    detail: "+12,4 %",
    trend: "up",
    icon: WalletCards,
    note: "vs. mois dernier",
  },
  {
    label: "Commandes en cours",
    value: "34",
    detail: "+5",
    trend: "up",
    icon: ClipboardList,
    note: "cette semaine",
  },
  {
    label: "Production du jour",
    value: "184",
    detail: "92 %",
    trend: "up",
    icon: Shirt,
    note: "de l’objectif",
  },
  {
    label: "Taux de qualité",
    value: "97,8 %",
    detail: "−0,3 %",
    trend: "down",
    icon: ShieldCheck,
    note: "vs. semaine passée",
  },
];

const stockAlerts = [
  { name: "Tissu coton noir", ref: "TIS-CN-024", value: 12, unit: "m", level: 18, critical: true },
  { name: "Fil polyester blanc", ref: "FIL-PB-011", value: 8, unit: "bob.", level: 26 },
  { name: "Fermeture YKK 20 cm", ref: "FER-20-008", value: 24, unit: "u.", level: 38 },
];

const lots = [
  { ref: "LOT-0924", client: "Maison Lenoir", item: "Chemises Oxford", qty: "320 pièces", progress: 78, due: "22 sept.", status: "En finition" },
  { ref: "LOT-0927", client: "Atelier Beaufort", item: "Pantalons cargo", qty: "180 pièces", progress: 52, due: "25 sept.", status: "En assemblage" },
  { ref: "LOT-0931", client: "Studio Noma", item: "Vestes workwear", qty: "120 pièces", progress: 31, due: "29 sept.", status: "En coupe" },
  { ref: "LOT-0933", client: "Éditions Rivage", item: "Tabliers brodés", qty: "250 pièces", progress: 16, due: "2 oct.", status: "Préparation" },
];

const workers = [
  { initials: "AB", name: "Amélie Bernard", role: "Piqueuse", pieces: 42, score: 112 },
  { initials: "SL", name: "Sofia Laurent", role: "Monteuse", pieces: 38, score: 104 },
  { initials: "MK", name: "Moussa Keita", role: "Coupeur", pieces: 35, score: 98 },
  { initials: "JD", name: "Julie Diallo", role: "Finition", pieces: 32, score: 94 },
];

const activityItems = [
  { icon: PackageCheck, text: "Lot LOT-0918 terminé", sub: "480 polos · Maison Lenoir", time: "Il y a 18 min", tone: "success" },
  { icon: PackageOpen, text: "Réception de matières", sub: "125 m de coton sergé", time: "Il y a 1 h", tone: "neutral" },
  { icon: AlertTriangle, text: "Stock sous le seuil", sub: "Tissu coton noir", time: "Il y a 2 h", tone: "warning" },
  { icon: Activity, text: "Contrôle qualité validé", sub: "LOT-0921 · 98,6 % conformes", time: "Il y a 3 h", tone: "success" },
];

function BrandMark() {
  return (
    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground shadow-sm group-data-[collapsible=icon]:size-8">
      <Shirt className="size-5 shrink-0 group-data-[collapsible=icon]:size-4" strokeWidth={2.2} />
    </div>
  );
}
function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-sidebar-border">
      <SidebarHeader className="h-18 justify-center px-3">
      <div className="flex items-center justify-center gap-3 overflow-hidden px-1">
          <BrandMark />
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate font-display text-[15px] font-bold text-sidebar-foreground">GESTATELIER</p>
              <p className="truncate text-[10px] font-semibold uppercase text-sidebar-foreground/50">Pilotage d’atelier</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent className="px-1 py-3">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-2 uppercase text-sidebar-foreground/40">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {navigation.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={item.active === true}
                    tooltip={item.label}
                    className="h-10 px-3 data-[active=true]:shadow-sm"
                    aria-label={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                  {item.badge && !collapsed ? (
                    <span className="absolute right-3 top-2.5 flex size-5 items-center justify-center rounded-full bg-warning text-[10px] font-bold text-warning-foreground">
                      {item.badge}
                    </span>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <div className="flex items-center gap-3 rounded-md border border-sidebar-border bg-sidebar-accent/50 p-2 group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-success-soft text-success">
            <Activity className="size-4" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-xs font-semibold text-sidebar-foreground">Atelier opérationnel</p>
              <p className="text-[10px] text-sidebar-foreground/50">Dernière synchro : 08:01</p>
            </div>
          )}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="font-display text-[15px] font-semibold text-foreground">{title}</h2>
      {subtitle ? <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full bg-canvas">
        <AppSidebar />
        <SidebarInset className="min-w-0 bg-canvas">
          <header className="sticky top-0 z-20 flex h-18 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-6">
            <SidebarTrigger className="size-9 border border-border bg-background shadow-xs" />
            <div className="relative hidden w-full max-w-sm md:block">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-10 bg-muted/55 pl-9 shadow-none" placeholder="Rechercher un lot, un article..." aria-label="Rechercher" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative size-9" aria-label="Notifications">
                <Bell />
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-background bg-destructive" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-11 gap-2 px-2">
                    <Avatar className="size-8 border border-border">
                      <AvatarFallback className="bg-primary text-xs font-bold text-primary-foreground">FM</AvatarFallback>
                    </Avatar>
                    <span className="hidden text-left lg:block">
                      <span className="block text-xs font-semibold leading-4">Fatima Martin</span>
                      <span className="block text-[10px] font-normal text-muted-foreground">Responsable d’atelier</span>
                    </span>
                    <ChevronDown className="hidden size-3.5 text-muted-foreground lg:block" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Settings /> Préférences</DropdownMenuItem>
                  <DropdownMenuItem><UserRoundCog /> Profil</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="mx-auto w-full max-w-[1680px] flex-1 p-4 md:p-6 xl:p-7">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase text-primary">Dimanche 20 septembre</p>
                <h1 className="font-display text-2xl font-bold text-foreground md:text-[28px]">Bonjour Fatima,</h1>
                <p className="mt-1 text-sm text-muted-foreground">Voici l’état de votre atelier aujourd’hui.</p>
              </div>
              <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-xs text-muted-foreground shadow-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                Données actualisées à 08:02
              </div>
            </div>

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicateurs clés">
              {stats.map((stat) => (
                <Card key={stat.label} className="min-w-0 overflow-hidden border-border/80 shadow-card">
                  <CardContent className="p-4.5">
                    <div className="flex items-start justify-between">
                      <div className="flex size-9 items-center justify-center rounded-md bg-primary-soft text-primary">
                        <stat.icon className="size-[18px]" />
                      </div>
                      <div className={cn("flex items-center gap-1 text-xs font-semibold", stat.trend === "down" ? "text-destructive" : "text-success")}>
                        {stat.trend === "down" ? <TrendingDown className="size-3.5" /> : <TrendingUp className="size-3.5" />}
                        {stat.detail}
                      </div>
                    </div>
                    <p className="mt-4 text-xs font-medium text-muted-foreground">{stat.label}</p>
                    <div className="mt-1 flex items-baseline justify-between gap-2">
                      <p className="font-display text-2xl font-bold tabular-nums text-foreground">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground">{stat.note}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.8fr)]">
              <Card className="min-w-0 border-border/80 shadow-card">
                <CardHeader className="flex-row items-start justify-between space-y-0 p-5 pb-2">
                  <SectionHeading title="Vue de production" subtitle="Pièces produites cette semaine" />
                  <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-chart-production" />Réalisé</span>
                    <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-chart-target" />Objectif</span>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-1 md:p-5 md:pt-1">
                  <ChartContainer config={productionConfig} className="h-[260px] w-full aspect-auto">
                    <AreaChart data={productionData} margin={{ top: 20, right: 10, left: -24, bottom: 0 }}>
                      <defs>
                        <linearGradient id="productionFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-produced)" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="var(--color-produced)" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid vertical={false} strokeDasharray="4 4" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tickMargin={10} />
                      <YAxis axisLine={false} tickLine={false} tickMargin={8} domain={[0, 280]} ticks={[0, 70, 140, 210, 280]} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                      <Area dataKey="target" type="monotone" stroke="var(--color-target)" strokeWidth={1.5} strokeDasharray="5 5" fill="transparent" />
                      <Area dataKey="produced" type="monotone" stroke="var(--color-produced)" strokeWidth={2.5} fill="url(#productionFill)" />
                    </AreaChart>
                  </ChartContainer>
                  <div className="mt-1 flex items-center justify-between border-t pt-4">
                    <div><p className="text-[11px] text-muted-foreground">Total semaine</p><p className="mt-0.5 font-display text-lg font-bold">1 414 pièces</p></div>
                    <Badge className="bg-success-soft text-success shadow-none hover:bg-success-soft">+6,8 % vs objectif</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="min-w-0 border-border/80 shadow-card">
                <CardHeader className="flex-row items-center justify-between space-y-0 p-5 pb-3">
                  <SectionHeading title="Alertes stock" subtitle="3 articles à réapprovisionner" />
                  <div className="flex size-8 items-center justify-center rounded-md bg-warning-soft text-warning-strong"><AlertTriangle className="size-4" /></div>
                </CardHeader>
                <CardContent className="space-y-3 p-5 pt-1">
                  {stockAlerts.map((item) => (
                    <div key={item.ref} className="rounded-md border border-border/80 bg-muted/30 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0"><p className="truncate text-xs font-semibold">{item.name}</p><p className="mt-0.5 text-[10px] text-muted-foreground">{item.ref}</p></div>
                        <Badge variant="outline" className={cn("shrink-0 px-1.5 py-0 text-[10px] shadow-none", item.critical ? "border-destructive/20 bg-destructive-soft text-destructive" : "border-warning/20 bg-warning-soft text-warning-strong")}>
                          {item.value} {item.unit}
                        </Badge>
                      </div>
                      <div className="mt-2.5 flex items-center gap-2"><Progress value={item.level} className={cn("h-1.5", item.critical ? "[&>div]:bg-destructive" : "[&>div]:bg-warning")} /><span className="text-[10px] tabular-nums text-muted-foreground">{item.level}%</span></div>
                    </div>
                  ))}
                  <Button variant="outline" className="mt-1 w-full text-xs"><Archive />Voir l’état du stock</Button>
                </CardContent>
              </Card>
            </section>

            <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.8fr)]">
              <Card className="min-w-0 border-border/80 shadow-card">
                <CardHeader className="flex-row items-center justify-between space-y-0 p-5 pb-3">
                  <SectionHeading title="Lots de production actifs" subtitle="4 lots actuellement en fabrication" />
                  <Button variant="ghost" size="sm" className="text-xs text-primary">Tout afficher</Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left">
                      <thead><tr className="border-y bg-muted/40 text-[10px] uppercase text-muted-foreground"><th className="px-5 py-2.5 font-semibold">Lot / Client</th><th className="px-3 py-2.5 font-semibold">Article</th><th className="px-3 py-2.5 font-semibold">Avancement</th><th className="px-3 py-2.5 font-semibold">Échéance</th><th className="px-5 py-2.5 text-right font-semibold">Statut</th></tr></thead>
                      <tbody>
                        {lots.map((lot) => (
                          <tr key={lot.ref} className="border-b border-border/70 last:border-0 hover:bg-muted/25">
                            <td className="px-5 py-3"><p className="text-xs font-semibold">{lot.ref}</p><p className="mt-0.5 text-[10px] text-muted-foreground">{lot.client}</p></td>
                            <td className="px-3 py-3"><p className="text-xs font-medium">{lot.item}</p><p className="mt-0.5 text-[10px] text-muted-foreground">{lot.qty}</p></td>
                            <td className="w-44 px-3 py-3"><div className="mb-1.5 flex justify-between text-[10px]"><span className="text-muted-foreground">Progression</span><span className="font-semibold">{lot.progress}%</span></div><Progress value={lot.progress} className="h-1.5" /></td>
                            <td className="px-3 py-3"><span className="flex items-center gap-1.5 text-xs"><Clock3 className="size-3 text-muted-foreground" />{lot.due}</span></td>
                            <td className="px-5 py-3 text-right"><Badge variant="secondary" className="font-medium shadow-none">{lot.status}</Badge></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="min-w-0 border-border/80 shadow-card">
                <CardHeader className="p-5 pb-2"><SectionHeading title="Activité récente" subtitle="Derniers mouvements dans l’atelier" /></CardHeader>
                <CardContent className="p-5 pt-2">
                  <div className="space-y-0">
                    {activityItems.map((item, index) => (
                      <div key={item.text} className="relative flex gap-3 pb-4 last:pb-0">
                        {index < activityItems.length - 1 ? <span className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-border" /> : null}
                        <div className={cn("z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-background", item.tone === "success" && "border-success/20 text-success", item.tone === "warning" && "border-warning/30 text-warning-strong", item.tone === "neutral" && "border-border text-muted-foreground")}><item.icon className="size-3.5" /></div>
                        <div className="min-w-0 pt-0.5"><p className="text-xs font-semibold">{item.text}</p><p className="mt-0.5 truncate text-[10px] text-muted-foreground">{item.sub}</p><p className="mt-1 text-[10px] text-muted-foreground/70">{item.time}</p></div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mt-4 grid gap-4 xl:grid-cols-2">
              <Card className="min-w-0 border-border/80 shadow-card">
                <CardHeader className="flex-row items-center justify-between space-y-0 p-5 pb-3"><SectionHeading title="Productivité des ouvriers" subtitle="Performance individuelle aujourd’hui" /><Badge variant="outline" className="font-medium shadow-none">Objectif : 36 pièces</Badge></CardHeader>
                <CardContent className="grid gap-3 p-5 pt-1 sm:grid-cols-2">
                  {workers.map((worker) => (
                    <div key={worker.name} className="flex items-center gap-3 rounded-md border border-border/80 p-3">
                      <Avatar className="size-9"><AvatarFallback className="bg-secondary text-[10px] font-bold text-secondary-foreground">{worker.initials}</AvatarFallback></Avatar>
                      <div className="min-w-0 flex-1"><div className="flex items-center justify-between gap-2"><div className="min-w-0"><p className="truncate text-xs font-semibold">{worker.name}</p><p className="text-[10px] text-muted-foreground">{worker.role}</p></div><div className="text-right"><p className="text-xs font-bold tabular-nums">{worker.pieces}</p><p className={cn("text-[10px] font-semibold", worker.score >= 100 ? "text-success" : "text-muted-foreground")}>{worker.score}%</p></div></div><Progress value={Math.min(worker.score, 100)} className="mt-2 h-1.5" /></div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="min-w-0 border-border/80 shadow-card">
                <CardHeader className="flex-row items-start justify-between space-y-0 p-5 pb-1"><SectionHeading title="Dépenses mensuelles" subtitle="Répartition sur les 6 derniers mois" /><div className="text-right"><p className="font-display text-lg font-bold">12 600 €</p><p className="text-[10px] font-medium text-destructive">+4,2 % ce mois</p></div></CardHeader>
                <CardContent className="p-3 pt-0 md:p-5 md:pt-0">
                  <ChartContainer config={expenseConfig} className="h-[205px] w-full aspect-auto">
                    <BarChart data={expenseData} margin={{ top: 18, right: 5, left: -28, bottom: 0 }} barGap={2}>
                      <CartesianGrid vertical={false} strokeDasharray="4 4" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
                      <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}k`} />
                      <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "var(--muted)" }} />
                      <Bar dataKey="materials" stackId="a" fill="var(--color-materials)" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="salaries" stackId="a" fill="var(--color-salaries)" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="overhead" stackId="a" fill="var(--color-overhead)" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                  <div className="flex flex-wrap items-center justify-center gap-4 border-t pt-3 text-[10px] text-muted-foreground">
                    {Object.entries(expenseConfig).map(([key, value]) => <span key={key} className="flex items-center gap-1.5"><span className={cn("size-2 rounded-sm", key === "materials" ? "bg-chart-expense-one" : key === "salaries" ? "bg-chart-expense-two" : "bg-chart-expense-three")} />{value.label}</span>)}
                  </div>
                </CardContent>
              </Card>
            </section>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
