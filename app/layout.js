import './globals.css'

export const metadata = {
  title: 'A to Z Inventory - Preview',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
