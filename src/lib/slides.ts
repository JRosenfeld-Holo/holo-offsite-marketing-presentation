export interface SlideDefinition {
  id: number
  label: string
  labelKey: string
  section: string
}

export const SLIDES: SlideDefinition[] = [
  { id: 0,  label: 'Title',                    labelKey: 'slide.title',      section: 'intro'      },
  { id: 1,  label: 'Asymmetric Advantage',      labelKey: 'slide.context',    section: 'strategy'   },
  { id: 2,  label: 'Cognitive Allocation',      labelKey: 'slide.cognitive',  section: 'strategy'   },
  { id: 3,  label: 'The Codebase of Revenue',   labelKey: 'slide.lever',      section: 'system'     },
  { id: 4,  label: 'Allbound Synchronization',  labelKey: 'slide.sync',       section: 'system'     },
  { id: 5,  label: 'Compounding Leverage',      labelKey: 'slide.system',     section: 'system'     },
  { id: 6,  label: 'Engineering Arsenal',       labelKey: 'slide.arsenal',    section: 'weapons'    },
  { id: 7,  label: 'Empirical Dominance',       labelKey: 'slide.results',    section: 'results'    },
  { id: 8,  label: 'Five Laws of Architecture', labelKey: 'slide.rules',      section: 'principles' },
  { id: 9,  label: 'The Comparison',            labelKey: 'slide.compare',    section: 'results'    },
  { id: 10, label: 'Conclusion',                labelKey: 'slide.conclusion', section: 'cta'        },
]

export const TOTAL_SLIDES = SLIDES.length
