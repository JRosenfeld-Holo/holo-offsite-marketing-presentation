import type { PersonalizationData } from './index'

export interface SlideProps {
  personalization?: PersonalizationData
  onNext: () => void
  onPrev: () => void
}
