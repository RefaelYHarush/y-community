import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://y-community.com'),
  title: {
    default: "קהילת וואי | Y Community - הבית הדיגיטלי שלך",
    template: "%s | קהילת וואי",
  },
  description:
    "קהילת וואי - פלטפורמה ישראלית מתקדמת עם מערכות AI לתמונות, מסחר אוטומטי, פיננסים, לידים ועוד. הצטרפו לקהילה הישראלית המובילה.",
  keywords: [
    "קהילת וואי",
    "Y Community",
    "AI",
    "מסחר אוטומטי",
    "FaceyMatch",
    "פיננסים",
    "לידים",
    "ישראל",
    "SAAS",
    "תמונות AI",
    "זיהוי פנים",
  ],
  authors: [{ name: "רפאל הרוש", url: "https://y-community.com" }],
  creator: "רפאל הרוש",
  publisher: "Y Community",
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
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://y-community.com",
    siteName: "קהילת וואי | Y Community",
    title: "קהילת וואי | Y Community - הבית הדיגיטלי שלך",
    description:
      "פלטפורמה ישראלית מתקדמת עם מערכות AI לתמונות, מסחר אוטומטי, פיננסים ועוד",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "קהילת וואי - Y Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "קהילת וואי | Y Community",
    description: "הבית הדיגיטלי שלך - AI, מסחר, פיננסים ועוד",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#a0df50",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-brand-green">
        {/* Background */}
        <div className="fixed inset-0 bg-animated -z-10" />
        
        {/* Main Layout */}
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
