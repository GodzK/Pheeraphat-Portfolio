import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pheeraphat Portfolio",
  description: "Pheeraphat Dherachaisuphakij - Project Manager Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://i.postimg.cc/9fqYVvxh/logo.png" type="image/x-icon" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
