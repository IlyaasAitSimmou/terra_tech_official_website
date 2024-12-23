import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/NavBar";
import styles from "./globals.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar items={[{ Link: "/", Name: "Home", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText},
          { Link: "/about", Name: "About", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText }, 
          {Link: "/articles", Name: "Articles", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText}, 
          {Link: "/newsletter", Name: "Newsletter", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText},
          {Link: "/contact", Name: "Contact", ContainerStyles: styles.ContactItem, TextStyles: styles.ContactFont}
          ]}/>
        {children}
      </body>
    </html>
  );
}