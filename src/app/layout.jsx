import { Geist, Geist_Mono, Inter, Sriracha } from "next/font/google";
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
  title: "BoltFolio",
  description: "An Interactive Experience.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.svg" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sricacha.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
