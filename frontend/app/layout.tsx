import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { VisualEditing } from '@/components/VisualEditing'

export const metadata: Metadata = {
  title: "Sarpino's Pizza Singapore | Authentic Italian Pizza Delivery",
  description: "Sarpino's Pizza Singapore - Authentic Italian pizza made with fresh ingredients and handmade dough daily. Order now for delivery or takeaway!",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isEnabled: isDraftMode } = await draftMode()

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  )
}
