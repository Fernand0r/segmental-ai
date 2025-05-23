import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Indexer | Smart Data Solutions",
  description: "Transform your organization with powerful AI-driven solutions for document indexing, knowledge management, and intelligent search. Experience the future of data processing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
