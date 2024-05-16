import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="https://office.mypge.id/static/scripts/sdk/1.0.0/api.js"></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
