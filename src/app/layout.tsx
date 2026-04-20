import type { Metadata } from "next";
import { Playfair_Display, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Voyage Intérieur de Wassim — Tome 1 : Le Pays des Couleurs Perdues",
  description: "Un livre interactif magique pour enfants. Wassim, 6 ans, part à la découverte du Pays des Couleurs Perdues pour ramener la joie et les couleurs dans le monde.",
  keywords: ["Tassawuf", "Soufi", "livre interactif", "spiritualité", "Islam", "jeunesse"],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${amiri.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-serif), Georgia, "Times New Roman", serif',
          backgroundColor: '#1a1033',
          color: '#faf5ff',
          overflowX: 'hidden',
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
