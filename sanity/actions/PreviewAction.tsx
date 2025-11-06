import {useState} from 'react'
import {useDocumentOperation} from 'sanity'
import {DocumentActionComponent} from 'sanity'

export const PreviewAction: DocumentActionComponent = (props) => {
  const {id, type, draft, published} = props

  // Get the base URL - use environment variable or default to localhost
  const baseUrl = 'http://localhost:5173'

  // Determine the preview URL based on document type
  let previewUrl = baseUrl

  if (type === 'location') {
    previewUrl = `${baseUrl}/locations.html`
  } else if (type === 'heroContent' || type === 'siteSettings' || type === 'promotion' || type === 'feature') {
    previewUrl = `${baseUrl}/`
  }

  return {
    label: 'Open Preview',
    icon: () => '🔗',
    onHandle: () => {
      window.open(previewUrl, '_blank')
    },
  }
}
