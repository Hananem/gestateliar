import { Shirt } from "lucide-react";

export function BrandMark() {
  return (
    <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground shadow-sm group-data-[collapsible=icon]:size-8">
      <Shirt className="size-5 shrink-0 group-data-[collapsible=icon]:size-4" strokeWidth={2.2} />
    </div>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="font-display text-[15px] font-semibold text-foreground">{title}</h2>
      {subtitle ? <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}