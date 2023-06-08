import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--nunito-sans',
});

export const metadata = {
  title: 'Book Wise',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
