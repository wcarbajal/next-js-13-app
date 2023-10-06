import '../styles/globals.css'
import { Navigator } from '../components/Navigator'

export const metadata = {
    title: 'mi primer app',
    description: 'nueva app'
}

export default function RootLayout({ children }) {
    return (
      <html lang='es'>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        </head>
        <body >
          <Navigator />
          {children}
        </body>
      </html>
    )
}
