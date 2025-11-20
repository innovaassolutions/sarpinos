'use client'

import { VisualEditing as SanityVisualEditing } from '@sanity/visual-editing/react'
import { useEffect } from 'react'

export function VisualEditing() {
  useEffect(() => {
    // Enable visual editing refresh on route changes
    if (
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
      process.env.NEXT_PUBLIC_SANITY_DATASET
    ) {
      console.log('[Visual Editing] Connected to Sanity Studio')
    }
  }, [])

  return <SanityVisualEditing portal={false} />
}
