import './globals.css'
import { Roboto_Mono } from 'next/font/google'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucas Catchlove',
  description: 'Lucas Catchlove\'s portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  )
}
