import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manav Patel | Electronics & Communication Engineer",
  description: "Portfolio of Manav Patel, an Electronics & Communication Engineer and Embedded Systems Developer specializing in IoT, PCB Design, and Power Electronics.",
  keywords: "Manav Patel, Electronics Engineer, Embedded Systems, IoT, PCB Design, Power Electronics, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
