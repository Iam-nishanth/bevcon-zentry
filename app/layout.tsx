import { ColorModeScript, theme } from '@chakra-ui/react'

import { Provider } from './provider'

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicons */}
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
        
        {/* Basic SEO */}
        <title>Bevcon Zentry - High Speed Doors, Dock Levellers, Industrial Doors & Loading Bay Solutions</title>
        <meta name="description" content="Leading manufacturer and supplier of high speed doors, dock levellers, dock shelters, truck restraints, and fire-rated shutters for industrial and warehousing facilities. Premium quality industrial doors and loading bay solutions." />
        <meta name="keywords" content="high speed doors, dock levellers, dock levelers, industrial doors, loading bay solutions, dock shelters, truck restraints, fire rated shutters, roller shutters, sectional doors, Bevcon Zentry, warehouse doors, rapid doors, industrial shutters, loading dock equipment" />
        <meta name="author" content="Bevcon Zentry" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://bevconzentry.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bevconzentry.in/" />
        <meta property="og:site_name" content="Bevcon Zentry" />
        <meta property="og:title" content="Bevcon Zentry - High Speed Doors, Dock Levellers & Industrial Door Solutions" />
        <meta property="og:description" content="Leading manufacturer and supplier of high speed doors, dock levellers, and industrial loading bay solutions for warehouses and manufacturing facilities." />
        <meta property="og:image" content="https://bevconzentry.in/static/meta/Bevcon-Zentry Twitter Card.png" />
        <meta property="og:image:alt" content="Bevcon Zentry - High Speed Doors and Industrial Solutions" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://bevconzentry.in/" />
        <meta name="twitter:title" content="Bevcon Zentry - High Speed Doors & Dock Levellers" />
        <meta name="twitter:description" content="Premium industrial doors, high speed doors, dock levellers and loading bay solutions for modern warehouses." />
        <meta name="twitter:image" content="https://bevconzentry.in/static/meta/Bevcon-Zentry Twitter Card.png" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bevcon Zentry",
            "url": "https://bevconzentry.in",
            "logo": "https://bevconzentry.in/static/favicons/favicon.ico",
            "description": "Leading manufacturer and supplier of high speed doors, dock levellers, and industrial loading bay solutions",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "availableLanguage": ["en", "hi"]
            },
            "sameAs": []
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Bevcon Zentry",
            "url": "https://bevconzentry.in",
            "description": "High Speed Doors, Dock Levellers and Industrial Door Solutions",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://bevconzentry.in/products/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
