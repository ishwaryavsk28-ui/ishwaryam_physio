import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Inter, Noto_Sans_Tamil, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CLINIC_DATA } from "@/lib/clinic-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "600"],
  variable: "--font-noto-tamil",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ishwaryamphysiotherapyspecialityclinic.com"),
  title: {
    default: "Ishwaryam Physiotherapy Clinic | Dr. S. Ishwarya | Best Physiotherapist in Gudiyatham",
    template: "%s | Ishwaryam Physiotherapy speciality clinic",
  },
  description: "Highest-rated Physiotherapy Clinic in Gudiyatham. Dr. S. Ishwarya (B.P.T., M.I.A.P.) offers 6+ years exp in Spine, Sports Injuries, Stroke Rehab & Pediatric care. 5.0★ Patient Satisfaction.",
  keywords: [
    "Physiotherapy clinic Gudiyatham",
    "Best Physiotherapist in Gudiyatham",
    "Back pain treatment Gudiyatham",
    "Sports injury clinic Vellore",
    "Neurological rehabilitation Gudiyatham",
    "Stroke recovery center Vellore",
    "Pediatric physiotherapy Gudiyatham",
    "Home visit physiotherapy Gudiyatham",
    "Dr Ishwarya Physiotherapist",
    "Dharanampet Physiotherapy",
    "Vellore District Physical Therapy"
  ],
  authors: [{ name: "Dr. S. Ishwarya" }],
  creator: "Dr. S. Ishwarya",
  publisher: "Ishwaryam Physiotherapy speciality clinic",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ishwaryam Physiotherapy speciality clinic | Dr. S. Ishwarya",
    description: "Expert Physiotherapy & Pain Rehabilitation in Gudiyatham. Evidence-based care for Spine, Sports, and Neuro conditions.",
    url: "https://ishwaryamphysiotherapyspecialityclinic.com",
    siteName: "Ishwaryam Physiotherapy",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Ishwaryam Physiotherapy Clinic Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishwaryam Physiotherapy Clinic",
    description: "Gudiyatham's Premier Physiotherapy & Rehabilitation Center.",
    images: ["/logo.png"],
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
    apple: "/logo.png",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Gudiyatham",
    "geo.position": "12.9460;78.8714",
    "ICBM": "12.9460, 78.8714",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "PhysiotherapyClinic", "LocalBusiness"],
    "name": CLINIC_DATA.name,
    "image": "https://ishwaryamphysiotherapyspecialityclinic.com/logo.png",
    "@id": "https://ishwaryamphysiotherapyspecialityclinic.com",
    "url": "https://ishwaryamphysiotherapyspecialityclinic.com",
    "telephone": CLINIC_DATA.contact.primary,
    "priceRange": "$$",
    "medicalSpecialty": [
      "Physiotherapy",
      "Pain Rehabilitation",
      "Neurological Rehabilitation",
      "Sports Medicine",
      "Geriatric Physiotherapy",
      "Pediatric Physiotherapy"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_DATA.address.line1,
      "addressLocality": "Gudiyatham",
      "addressRegion": "Tamil Nadu",
      "postalCode": "632602",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9460,
      "longitude": 78.8714
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Physiotherapy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orthopedic Physiotherapy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Neurological Rehabilitation"
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      CLINIC_DATA.contact.youtube,
      CLINIC_DATA.contact.facebook,
      CLINIC_DATA.contact.instagram
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${inter.variable} ${notoTamil.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
