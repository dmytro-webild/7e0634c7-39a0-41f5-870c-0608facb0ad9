import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Playfair_Display, Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'GoldCoast Gold Buyers | Cash For Gold Midlothian',
  description: 'Sell your gold, silver, and platinum for cash today in Midlothian. Trusted experts with a perfect 5-star rating.',
  openGraph: {
    "title": "GoldCoast Gold Buyers",
    "description": "Cash for gold experts in Midlothian.",
    "type": "website"
  },
};

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
