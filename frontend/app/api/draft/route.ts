import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  // Enable Draft Mode
  const draft = await draftMode()
  draft.enable()

  // Redirect to the path or homepage if no slug
  redirect(slug || '/')
}
