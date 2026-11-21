import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tsugi — Never Miss What's Next",
    template: "%s — Tsugi"
  },
  description:
    "Tsugi (次) helps you discover, understand, track, and stay informed about anime, manga, manhwa, and manhua.",
  applicationName: "Tsugi",
  icons: {
    icon: "/favicon.svg"
  }
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
