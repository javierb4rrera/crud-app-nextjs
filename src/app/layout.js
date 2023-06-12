import './globals.css'
import { Inter } from 'next/font/google'
import { TasksProvider } from '@/context/TasksContext'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TUC | 🐐',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TasksProvider>
          <Header />
          {children}
        </TasksProvider>
      </body>
    </html>
  )
}
