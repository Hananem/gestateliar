import { Bell, ChevronDown, Search, Settings, UserRoundCog } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-6">
      <SidebarTrigger className="size-9 border border-border bg-background shadow-xs" />
      <div className="relative hidden w-full max-w-sm md:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input className="h-10 bg-muted/55 pl-9 shadow-none" placeholder="Rechercher un lot, un article..." aria-label="Rechercher" /></div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative size-9" aria-label="Notifications"><Bell /><span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-background bg-destructive" /></Button>
        <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-11 gap-2 px-2"><Avatar className="size-8 border border-border"><AvatarFallback className="bg-primary text-xs font-bold text-primary-foreground">FM</AvatarFallback></Avatar><span className="hidden text-left lg:block"><span className="block text-xs font-semibold leading-4">Fatima Martin</span><span className="block text-[10px] font-normal text-muted-foreground">Responsable d’atelier</span></span><ChevronDown className="hidden size-3.5 text-muted-foreground lg:block" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-52"><DropdownMenuLabel>Mon compte</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem><Settings /> Préférences</DropdownMenuItem><DropdownMenuItem><UserRoundCog /> Profil</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
      </div>
    </header>
  );
}