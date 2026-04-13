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
  title: "Ishwaryam Physiotherapy Clinic Gudiyatham | Dr. S. Ishwarya | Pain Relief & Rehabilitation",
  description: "Gudiyatham's highest-rated physiotherapy clinic. Dr. S. Ishwarya (B.P.T., M.I.A.P.) provides evidence-based treatment for back pain, spine disorders, sports injuries, neurological rehab & more. 5.0★ rated.",
  keywords: "physiotherapy clinic Gudiyatham, physiotherapist Vellore district, back pain treatment Gudiyatham, Dr Ishwarya physiotherapy, rehabilitation center Gudiyatham, spine treatment Tamil Nadu, sports injury physio Gudiyatham",
  openGraph: {
    title: "Ishwaryam Physiotherapy Clinic Gudiyatham",
    description: "Expert physiotherapy care in Gudiyatham by Dr. S. Ishwarya.",
    url: "https://ishwaryamphysio.com",
    siteName: CLINIC_DATA.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://ishwaryamphysio.com",
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
    "image": "https://ishwaryamphysio.com/images/clinic-exterior.jpg", // Placeholder
    "@id": "https://ishwaryamphysio.com",
    "url": "https://ishwaryamphysio.com",
    "telephone": CLINIC_DATA.contact.primary,
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
      // Add social links if available
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
