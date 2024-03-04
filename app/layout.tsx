import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/components/ui/NavMenu";

export const metadata: Metadata = {
  title: "Event Manager",
  description: "Event Management Project by Team TechDyno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
