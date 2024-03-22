import './globals.css'
export const metadata = {
  title: 'Stellargate',
  description: 'AI Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased dark">
      <body className='bg-zinc-50 font-sans dark:bg-zinc-950'>{children}</body>
    </html>
  )
}
