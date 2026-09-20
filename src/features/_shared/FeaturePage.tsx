import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/shared/Shared";

export function FeaturePage({ title, subtitle }: { title: string; subtitle: string }) {
  return <PageShell><SectionHeading title={title} subtitle={subtitle} /></PageShell>;
}