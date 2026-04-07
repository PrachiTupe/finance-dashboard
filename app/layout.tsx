import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackendLoader from "@/components/BackendLoader";




export const metadata: Metadata = {
  title: "Backend Assessment - Finance Dashboard",
  description: "Created by Prachi Tupe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {/* 🔥 Loader goes here */}
        <BackendLoader />

        {/* Your App */}
        {children}
      </body>
    </html>
  );
}