import { FeatureView } from '@/features/_shared/FeatureView'
import type { SubViewProps } from '@/types/shared'

export function SubView({ title, subtitle }: SubViewProps) {
  return <FeatureView title={title} subtitle={subtitle} />
}
