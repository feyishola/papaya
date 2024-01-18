import './globals.css'
import MiniDrawer from './components/drawer'

export const metadata = {
  title: 'Papaya App',
  description: 'Created by Feyi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MiniDrawer>
          {children}
        </MiniDrawer>
        
      </body>
    </html>
  )
}
