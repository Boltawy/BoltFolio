import { Geist, Geist_Mono, Inter, Sriracha } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sricacha = Sriracha({
  variable: "--font-sriracha",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Boltfolio",
  description: "A minimalistic or interactive experience",
  icons: {
    icon: "/bolt-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-gray-500 selection:text-gray-50">
      <head>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sricacha.variable} antialiased`}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
