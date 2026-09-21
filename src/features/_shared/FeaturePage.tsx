import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/shared/Shared";
import { useLanguage } from "@/lib/i18n";

export function FeaturePage({ title, subtitle }: { title: string; subtitle: string }) {
  const { t } = useLanguage();

  return <PageShell><SectionHeading title={t(title)} subtitle={t(subtitle)} /></PageShell>;
}