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
  { label: "Stock", icon: Boxes, path: "/stock", badge: "3", children: [{ label: "Matières", path: "/stock/matieres" }, { label: "Rouleaux / Lots", path: "/stock/rouleaux-lots" }, { label: "Mouvements", path: "/stock/mouvements" }, { label: "Réceptions", path: "/stock/receptions" }, { label: "Sorties", path: "/stock/sorties" }, { label: "Retours", path: "/stock/retours" }, { label: "Inventaire", path: "/stock/inventaire" }] },
  { label: "Production", icon: Shirt, path: "/production", children: [{ label: "Articles", path: "/production/articles" }, { label: "Opérations", path: "/production/operations" }, { label: "Lots de production", path: "/production/lots" }] },
  { label: "Équipe", icon: Users, path: "/team", children: [{ label: "Ouvriers", path: "/team/ouvriers" }, { label: "Affectations", path: "/team/affectations" }, { label: "Travail", path: "/team/travail" }] },
  { label: "Paie", icon: Banknote, path: "/payroll", children: [{ label: "Barèmes", path: "/payroll/baremes" }, { label: "Avances", path: "/payroll/avances" }, { label: "Primes", path: "/payroll/primes" }, { label: "Retenues", path: "/payroll/retenues" }, { label: "Calcul mensuel", path: "/payroll/calcul-mensuel" }] },
  { label: "Dépenses", icon: WalletCards, path: "/expenses", children: [{ label: "Dépenses", path: "/expenses/depenses" }, { label: "Catégories", path: "/expenses/categories" }, { label: "Dépenses récurrentes", path: "/expenses/depenses-recurrentes" }] },
  { label: "Rapports", icon: FileBarChart, path: "/reports", children: [{ label: "Stock", path: "/reports/stock" }, { label: "Production", path: "/reports/production" }, { label: "Productivité", path: "/reports/productivite" }, { label: "Paie", path: "/reports/paie" }, { label: "Dépenses", path: "/reports/depenses" }, { label: "Coûts", path: "/reports/couts" }] },
  { label: "Administration", icon: UserRoundCog, path: "/admin", children: [{ label: "Utilisateurs", path: "/admin/utilisateurs" }, { label: "Rôles & permissions", path: "/admin/roles-permissions" }, { label: "Paramètres", path: "/admin/parametres" }, { label: "Audit", path: "/admin/audit" }] },
];