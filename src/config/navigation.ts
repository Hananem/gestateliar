import {
  Banknote,
  Boxes,
  FileBarChart,
  LayoutDashboard,
  Shirt,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  icon: LucideIcon;
  path: string;
  badge?: string;
  children?: NavigationChild[];
};

export type NavigationChild = {
  label: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Stock", icon: Boxes, path: "/stock", badge: "3", children: [{ label: "Vue d'ensemble", path: "/stock" }, { label: "Matières & accessoires", path: "/stock/matieres" }, { label: "Rouleaux / Lots", path: "/stock/rouleaux-lots" }, { label: "Réceptions", path: "/stock/receptions" }, { label: "Sorties", path: "/stock/sorties" }, { label: "Retours", path: "/stock/retours" }, { label: "Inventaires", path: "/stock/inventaire" }, { label: "Historique des mouvements", path: "/stock/mouvements" }, { label: "Valorisation", path: "/stock/valorisation" }, { label: "Alertes de stock", path: "/stock/alertes" }] },
  { label: "Production", icon: Shirt, path: "/production", children: [{ label: "Vue d'ensemble", path: "/production" }, { label: "Articles", path: "/production/articles" }, { label: "Opérations", path: "/production/operations" }, { label: "Lots de production", path: "/production/lots" }, { label: "Consommation", path: "/production/consommation" }, { label: "Avancement", path: "/production/avancement" }, { label: "Rejets", path: "/production/rejets" }] },
  { label: "Équipe", icon: Users, path: "/team", children: [{ label: "Ouvriers", path: "/team/ouvriers" }, { label: "Affectations", path: "/team/affectations" }, { label: "Travail quotidien", path: "/team/travail" }] },
  { label: "Paie", icon: Banknote, path: "/payroll", children: [{ label: "Paie", path: "/payroll" }, { label: "Barèmes", path: "/payroll/baremes" }, { label: "Avances", path: "/payroll/avances" }, { label: "Primes", path: "/payroll/primes" }, { label: "Retenues", path: "/payroll/retenues" }, { label: "Calcul mensuel", path: "/payroll/calcul-mensuel" }, { label: "Clôtures", path: "/payroll/clotures" }, { label: "Fiche de paie", path: "/payroll/fiche-de-paie" }] },
  { label: "Dépenses", icon: WalletCards, path: "/expenses", children: [{ label: "Dépenses", path: "/expenses/depenses" }, { label: "Catégories", path: "/expenses/categories" }, { label: "Dépenses récurrentes", path: "/expenses/depenses-recurrentes" }] },
  { label: "Rapports", icon: FileBarChart, path: "/reports", children: [{ label: "Stock", path: "/reports/stock" }, { label: "Production", path: "/reports/production" }, { label: "Productivité", path: "/reports/productivite" }, { label: "Paie", path: "/reports/paie" }, { label: "Dépenses", path: "/reports/depenses" }, { label: "Coûts", path: "/reports/couts" }] },
  { label: "Administration", icon: UserRoundCog, path: "/admin", children: [{ label: "Utilisateurs", path: "/admin/utilisateurs" }, { label: "Rôles & permissions", path: "/admin/roles-permissions" }, { label: "Paramètres", path: "/admin/parametres" }, { label: "Audit", path: "/admin/audit" }] },
];