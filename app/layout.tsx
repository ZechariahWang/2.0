import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "zech wang",
  description: "mechatronics engineering student at the university of waterloo.",
  metadataBase: new URL("https://zechariahwang.ca"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
