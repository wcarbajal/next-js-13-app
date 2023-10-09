import '../styles/globals.css'
import { Navigator } from '../components/Navigator'

export const metadata = {
    title: 'mi primer app',
    description: 'nueva app'
}

export default function RootLayout({ children }) {
    return (
      <html lang='es'>
        <body >
          <Navigator />
          {children}
        </body>
      </html>
    )
}
