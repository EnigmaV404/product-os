import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Product OS | Vatsal Sheth",
  description:
    "An interactive product experience about how Vatsal Sheth thinks, designs systems, and turns complexity into leverage."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
