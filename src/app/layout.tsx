import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "ChatBot Project by Keremunce.com",
  description: "This innovative project, developed by keremunce.com, stands out with its user-friendly interface and smart messaging features. Optimized for mobile devices, it offers an intuitive design that ensures a seamless experience for users. With real-time interaction, responsive layout, and advanced performance optimizations, it provides a modern solution that caters to both personal and business needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
