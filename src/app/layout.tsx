import './globals.css'
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import Particles from './components/practicles';
import ScrollToTop from './components/ScrollToTop';

export const metadata: Metadata = {
  title: {
    default: "shubhkumar.in",
    template: "%s | shubhkumar.in",
  },
  description: "Software engineer at airfi.aero",
  openGraph: {
    title: "shubhkumar.in",
    description:
      "Software engineer at airfi.aero",
    url: "https://shubhkumar.in",
    siteName: "shubhkumar.in",
    images: [
      {
        url: "https://shubhkumar.in/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Shubham Kumar",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};


const inter = Inter({
  subsets: ["latin"],
});

const calSans = LocalFont({
  src: "../../public/CalSans-SemiBold.ttf"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.className, calSans.className].join(" ")}>
      <head>
        {/* <Analytics /> */}
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
          refresh={true}
        />
        {children}
        <ScrollToTop/>
      </body>
    </html>
  );
}