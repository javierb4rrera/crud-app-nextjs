import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/Toaster'
import { TasksProvider } from '@/context/TasksContext'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <TasksProvider>
          <Header />
          {children}
          <Toaster />
        </TasksProvider>
      </body>
    </html>
  )
}
