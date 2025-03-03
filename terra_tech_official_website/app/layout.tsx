import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/NavBar";
import styles from "./globals.module.css";
import Head from "next/head";

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
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
        </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
        <NavBar items={[{ Link: "/", Name: "Home", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText},
          { Link: "/about", Name: "About", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText }, 
          {Link: "/articles", Name: "Articles", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText}, 
          {Link: "/newsletter", Name: "Newsletter", ContainerStyles: styles.regNavItems, TextStyles: styles.regNavText},
          {Link: "/contact", Name: "Contact", ContainerStyles: styles.ContactItem, TextStyles: styles.ContactFont}
          ]} NavBarStyle={styles.NavBar} NavLinksStyle={styles.NavLinks} NavLogo={styles.NavLogo}/>
        {children}
      </body>
    </html>
  );
}
