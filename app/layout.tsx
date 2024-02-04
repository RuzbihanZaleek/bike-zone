import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "Bike Zone",
  description: "Discover your favourite bike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
