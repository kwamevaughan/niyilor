import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// Miguer Sans - For Nav and Headers
const miguerSans = localFont({
  src: [
    { path: "../assets/fonts/MiguerSans-Thin.woff2", weight: "100", style: "normal" },
    { path: "../assets/fonts/MiguerSans-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../assets/fonts/MiguerSans-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../assets/fonts/MiguerSans-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "../assets/fonts/MiguerSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/MiguerSans-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../assets/fonts/MiguerSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/MiguerSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "../assets/fonts/MiguerSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/MiguerSans-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../assets/fonts/MiguerSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/MiguerSans-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../assets/fonts/MiguerSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/MiguerSans-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../assets/fonts/MiguerSans-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../assets/fonts/MiguerSans-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "../assets/fonts/MiguerSans-Black.woff2", weight: "900", style: "normal" },
    { path: "../assets/fonts/MiguerSans-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-miguer",
});

// Ethos Nova - For Body and Sub-body
const ethosNova = localFont({
  src: [
    { path: "../assets/fonts/EthosNova-Thin.woff2", weight: "100", style: "normal" },
    { path: "../assets/fonts/EthosNova-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../assets/fonts/EthosNova-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/EthosNova-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../assets/fonts/EthosNova-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/EthosNova-Italic.woff2", weight: "400", style: "italic" },
    { path: "../assets/fonts/EthosNova-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/EthosNova-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../assets/fonts/EthosNova-Bold.woff2", weight: "700", style: "normal" },
    { path: "../assets/fonts/EthosNova-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../assets/fonts/EthosNova-Heavy.woff2", weight: "800", style: "normal" },
    { path: "../assets/fonts/EthosNova-HeavyItalic.woff2", weight: "800", style: "italic" },
  ],
  variable: "--font-ethos",
});

// SEO Best Practices for Next.js App Router
export const metadata: Metadata = {
  // Metadata Base - Required for resolving relative URLs in Open Graph images
  metadataBase: new URL("https://niyilor.com"), // Update with your actual domain

  // Title Configuration - Uses template for automatic page-specific titles
  title: {
    default: "Niyilor Advertising | Full-Service Creative Agency | #WeAreNiyilor",
    template: "%s | Niyilor Advertising", // Automatically appends brand name to page titles
  },

  // Meta Description - Concise, keyword-rich (150-160 chars recommended)
  description: "Niyilor is a full-service advertising agency specializing in creative solutions for businesses of all sizes. Your one-stop shop for all things creative.",

  // Keywords - Helps with SEO (though less important than before)
  keywords: [
    "advertising agency",
    "creative agency",
    "marketing solutions",
    "brand development",
    "digital marketing",
    "creative services",
    "Niyilor",
    "Ghana",
    "Accra",
    "West Africa",
  ],

  // Author & Creator
  authors: [{ name: "Niyilor Advertising" }],
  creator: "Niyilor Advertising",
  publisher: "Niyilor Advertising",

  // Robots Configuration - Controls search engine crawling
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph - For social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://niyilor.com", // Update with your actual domain
    siteName: "Niyilor Advertising",
    title: "Niyilor Advertising | Full-Service Creative Agency | #WeAreNiyilor",
    description: "A full-service advertising agency in Accra, Ghana, specializing in creative solutions for businesses of all sizes.",
    images: [
      {
        url: "/og-image.png", // Create this image: 1200x630px recommended
        width: 1200,
        height: 630,
        alt: "Niyilor Advertising - Creative Solutions",
      },
    ],
  },

  // Twitter Card - For Twitter/X sharing
  twitter: {
    card: "summary_large_image",
    title: "Niyilor Advertising | Full-Service Creative Agency | #WeAreNiyilor",
    description: "A full-service advertising agency that specializes in creative solutions for businesses of all sizes.",
    images: ["/twitter-image.png"], // Create this image: 1200x600px recommended
    creator: "@niyilor", // Update with your actual Twitter handle
  },

  // Manifest - PWA support
  manifest: "/manifest.json", // Create this file if you want PWA support

  // Icons - Favicon and app icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },

  // Verification - Add your verification codes when available
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   bing: "your-bing-verification-code",
  // },
};

// Viewport Configuration - Separate export (Next.js 13+ requirement)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Niyilor Advertising",
    url: "https://niyilor.com",
    logo: "https://niyilor.com/logo.png",
    description: "A full-service advertising agency in Accra, Ghana, specializing in creative solutions for businesses of all sizes.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      addressCountry: "GH"
    },
    areaServed: ["GH", "West Africa"], // Improves visibility for regional searches
    foundingDate: "2024",
    sameAs: [
      "https://www.instagram.com/niyilor.visuals", // Updated to the handle found in search
      "https://www.twitter.com/niyilor",
      "https://www.linkedin.com/company/niyilor",
      "https://www.facebook.com/niyilor",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
  };

  return (
    <html lang="en" className={`${ethosNova.variable} ${miguerSans.variable}`}>
      <body className="antialiased">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Navbar />

        {children}
      </body>
    </html>
  );
}
