import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <script src="https://kit.fontawesome.com/8d4a50949e.js" crossorigin="anonymous"></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
