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
};

export const navigation: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Stock", icon: Boxes, path: "/stock", badge: "3" },
  { label: "Production", icon: Shirt, path: "/production" },
  { label: "Équipe", icon: Users, path: "/team" },
  { label: "Paie", icon: Banknote, path: "/payroll" },
  { label: "Dépenses", icon: WalletCards, path: "/expenses" },
  { label: "Rapports", icon: FileBarChart, path: "/reports" },
  { label: "Administration", icon: UserRoundCog, path: "/admin" },
];