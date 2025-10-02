import { ColorModeScript, theme } from '@chakra-ui/react'

import { Provider } from './provider'

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <meta title="Bevcon Zentry - Industrial Doors,High Speed Doors, Dock Levellers, Roller Shutters" />
        <meta name="description" content="Bevcon Zentry - Industrial Doors,High Speed Doors, Dock Levellers, Roller Shutters" />
        <meta name="keywords" content="Bevcon Zentry, Bevcon, Zentry, Industrial Doors,High Speed Doors, Dock Levellers, Roller Shutters" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Bevcon Zentry - Industrial Doors,High Speed Doors, Dock Levellers, Roller Shutters" />
        <meta property='og:description' content="Bevcon Zentry - Industrial Doors,High Speed Doors, Dock Levellers, Roller Shutters"/>
        <meta property='og:type' content="website"/>
        <meta property='og:url' content="https://bevconzentry.in"/>
        <meta property='og:image' content="/public/static/meta/Bevcon-Zentry Twitter Card.png"/>
        <meta property='og:image:alt' content="Bevcon Zentry - Industrial Doors,High Speed Doors, Dock Levellers, Roller Shutters"/>
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
