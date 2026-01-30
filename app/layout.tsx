import type React from "react"
import type { Metadata } from "next"
import { Montserrat, IBM_Plex_Serif, Poppins, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

// Primary fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
})

// Fallback fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mmerischolars.com"),
  title: {
    default: "MMERI Scholars | Victory Belongs to the First",
    template: "%s | MMERI Scholars",
  },
  description:
    "Culturally aligned college advising for first-generation students and families of the global diaspora. We honor heritage, uplift values, and transform first-generation steps into lasting victories.",
  keywords: [
    "college advising",
    "first-generation students",
    "diaspora",
    "college admissions",
    "African diaspora",
    "scholarship guidance",
    "MMERI Scholars",
    "culturally aligned education",
    "college counseling",
    "higher education",
    "first-gen college",
    "immigrant families education",
  ],
  authors: [{ name: "Lisa Banyem, M.Ed" }],
  creator: "MMERI Scholars",
  publisher: "MMERI Scholars",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MMERI Scholars | Victory Belongs to the First",
    description:
      "Culturally aligned college advising for first-generation students and families of the global diaspora.",
    url: "https://mmerischolars.com",
    siteName: "MMERI Scholars",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/full-20logo-20-transparent.png",
        width: 1200,
        height: 630,
        alt: "MMERI Scholars - Victory Belongs to the First",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMERI Scholars | Victory Belongs to the First",
    description:
      "Culturally aligned college advising for first-generation students and families of the global diaspora.",
    images: ["/images/full-20logo-20-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#A51C30",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-RG93NEHSD0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RG93NEHSD0');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MMERI Scholars",
              description:
                "Culturally aligned college advising for first-generation students and families of the global diaspora.",
              url: "https://mmerischolars.com",
              logo: "/images/full-20logo-20-transparent.png",
              founder: {
                "@type": "Person",
                name: "Lisa Banyem",
                jobTitle: "Founder & Lead Advisor",
                honorificSuffix: "M.Ed",
              },
              sameAs: ["https://instagram.com/mmerischolars", "https://threads.net/@mmerischolars"],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@mmerischolars.com",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${ibmPlexSerif.variable} ${poppins.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
