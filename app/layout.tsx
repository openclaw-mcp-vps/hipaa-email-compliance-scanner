import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIPAA Email Compliance Scanner',
  description: 'Scan email communications for HIPAA compliance violations. Protect your practice from PHI exposure and costly fines.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d424477e-a81f-4885-8dd6-f36ea9a16b0c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
