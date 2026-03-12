export interface SlideDefinition {
  id: number
  label: string
  labelKey: string
  section: string
}

export const SLIDES: SlideDefinition[] = [
  { id: 0, label: 'Cover', labelKey: 'slide.cover', section: 'intro' },
  { id: 1, label: 'What is Hologram?', labelKey: 'slide.whatIsHologram', section: 'intro' },
  { id: 2, label: 'The Problem', labelKey: 'slide.theProblem', section: 'problem' },
  { id: 3, label: 'Revenue at Risk', labelKey: 'slide.businessRisk', section: 'problem' },
  { id: 4, label: 'Measurable ROI', labelKey: 'slide.roi', section: 'solution' },
  { id: 5, label: 'Platform Overview', labelKey: 'slide.platform', section: 'solution' },
  { id: 6, label: 'Hyper SIMs', labelKey: 'slide.hyperSIMs', section: 'features' },
  { id: 7, label: 'Outage Protection', labelKey: 'slide.outageProtection', section: 'features' },
  { id: 8, label: 'Native Profiles', labelKey: 'slide.nativeProfiles', section: 'features' },
  { id: 9, label: 'Software & API', labelKey: 'slide.softwareAPI', section: 'features' },
  { id: 10, label: 'Expert Support', labelKey: 'slide.support', section: 'features' },
  { id: 11, label: 'Security', labelKey: 'slide.security', section: 'features' },
  { id: 12, label: 'Global Coverage', labelKey: 'slide.globalCoverage', section: 'coverage' },
  { id: 13, label: '6,000+ Customers', labelKey: 'slide.customers', section: 'social-proof' },
  { id: 14, label: 'Verkada', labelKey: 'slide.verkada', section: 'social-proof' },
  { id: 15, label: "Farmer's Fridge", labelKey: 'slide.farmersFridge', section: 'social-proof' },
  { id: 16, label: 'SundayPower', labelKey: 'slide.sundayPower', section: 'social-proof' },
  { id: 17, label: 'Platform Capabilities', labelKey: 'slide.capabilities1', section: 'capabilities' },
  { id: 18, label: 'Supercharge IoT', labelKey: 'slide.supercharge', section: 'capabilities' },
  { id: 19, label: 'Product Demo', labelKey: 'slide.demo', section: 'demo' },
  { id: 20, label: 'Tailored Plan', labelKey: 'slide.tailored', section: 'cta' },
  { id: 21, label: 'Pricing Calculator', labelKey: 'slide.calculator', section: 'pricing' },
  { id: 22, label: 'Stay Connected', labelKey: 'slide.contact', section: 'cta' },
]

export const TOTAL_SLIDES = SLIDES.length
