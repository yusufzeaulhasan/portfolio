import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yusuf Hasan — Electrical Engineer",
  description:
    "Portfolio of Yusuf Hasan: embedded systems, sensor fusion, PCB design, and full-stack engineering. UBC Electrical Engineering, Amazon, Bosch.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
