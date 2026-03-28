import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Volta - Fidelización Digital de Clientes',
  description: 'Una sola app para todos tus programas de fidelización. Acumulá puntos, subí de nivel y canjeá premios reales.',
  keywords: 'fidelización, loyalty, app, puntos, premios',
  openGraph: {
    title: 'Volta - Fidelización Digital',
    description: 'Centraliza todos tus programas de loyalty en una sola app',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-volta-background text-volta-on-surface">
        {children}
      </body>
    </html>
  )
}
