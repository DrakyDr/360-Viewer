import React from "react";
import "./globals.css";

export const metadata = {
  title: "Simple 360 Viewer",
  description: "Direct client 360 panorama preview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}