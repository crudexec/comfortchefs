import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comfort Chefs | Premium Catering Services in Nigeria",
  description: "Comfort Chefs - A hospitality company providing premium catering services since 1973. Corporate catering, weddings, private events, and canteen management trusted by Nigeria's leading corporations.",
  keywords: "catering, Nigeria, Lagos, corporate catering, wedding catering, hospitality, events, Comfort Chefs",
  openGraph: {
    title: "Comfort Chefs | Premium Catering Services in Nigeria",
    description: "50+ years of culinary excellence. Premium catering for corporate events, weddings, and private functions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
