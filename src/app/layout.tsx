import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "MineLink | Connected Mining Intelligence Platform",
  description: "AI-powered mining intelligence platform connecting safety, monitoring, and intelligent systems for modern mining operations.",
  openGraph: {
    title: "MineLink | Connected Mining Intelligence Platform",
    description: "AI-powered mining intelligence platform connecting safety, monitoring, and intelligent systems for modern mining operations.",
    url: "https://minelink.in",
    siteName: "MineLink",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MineLink",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
