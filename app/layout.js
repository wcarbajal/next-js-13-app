import Link from "next/link";

export const metadata = {
    title: 'mi primer app',
    description: 'nueva app'
}

const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'About',
    route: '/about'
} ]
export default function RootLayout({ children }) {
    return (
        <html lang='es'>

            <body >
                <header>
                    <nav>
                        <ul>
                            {
                                links.map (({label, route}) => (
                                    <li key={route}>
                                        <Link href={route}>{label}</Link>
                                    </li>
                                ))
                            }
                            <li>Inicio</li>
                        </ul>
                    </nav>

                </header>

                {children}
            </body>
        </html>
    )
}
