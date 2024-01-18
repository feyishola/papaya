// "use client"
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from './page.module.css'
import MiniDrawer from './components/drawer'
import { BrowserRouter } from 'react-router-dom'
import { AppRoute } from './routes/route'
import { HomePage } from './components/home'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HomePage/>
    </main>
  )
}
