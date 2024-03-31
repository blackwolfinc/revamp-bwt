import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head from next/head to handle metadata
import claw from '../../public/assets/img/claw.png'

import "./globals.css";
import "../assets/css/animate.css";

const inter = Inter({ subsets: ["latin"] });
const baseURL = "https://www.blackwolftech.id/"; // Updated with your website URL

export const metadata: Metadata = {
  title: "Software Development Solutions | Black Wolf Tech Indonesia",
  description: "Empower your business with top-notch software development solutions from Black Wolf Tech Indonesia. We specialize in cutting-edge technology, delivering innovative and tailored software solutions to drive your success in Indonesia and beyond.",
  keywords: "software development, technology solutions, Indonesia, Black Wolf Tech, innovation",
  author: "Black Wolf Tech Indonesia",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />
        {/* Open Graph (og) meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${baseURL}${claw}`} />
        <meta property="og:url" content={baseURL} />
        <meta property="og:type" content="website" />
        {/* Additional meta tags for best SEO in Indonesia */}
        <meta name='language' content='id' />
        <meta name='revised' content='Tuesday, March 31st, 2024, 3:00 pm' />
        <meta name='abstract' content='Solutions pengembangan perangkat lunak terbaik dari Black Wolf Tech Indonesia.' />
        <meta name='topic' content='Pengembangan Perangkat Lunak' />
        <meta name='summary' content='Solutions pengembangan perangkat lunak terbaik dari Black Wolf Tech Indonesia.' />
        <meta name='Classification' content='Bisnis' />
        <meta name='owner' content='Black Wolf Tech Indonesia' />
        <meta name='url' content={baseURL} />
        <meta name='identifier-URL' content={baseURL} />
        <meta name='pagename' content={metadata.title} />
        <meta name='category' content='Teknologi' />
        <meta name='coverage' content='Indonesia' />
        <meta name='distribution' content='Global' />
        <meta name='revisit-after' content='7 days' />
        <meta name='subtitle' content='Teknologi terdepan untuk solusi bisnis Anda' />
        <meta name='target' content='all' />
        <meta name='HandheldFriendly' content='True' />
        <meta name='MobileOptimized' content='320' />
        <meta name='date' content='Mar. 31, 2024' />
        <meta name='search_date' content='2024-03-31' />
        <meta name='DC.title' content='Software Development Solutions | Black Wolf Tech Indonesia' />
        {/* Additional <link> tags */}
        <link rel='canonical' href={baseURL} />
        <link rel='stylesheet' media='only screen and (max-device-width: 480px)' href={`${baseURL}wordpress.org/style/iphone.css`} type='text/css' />
        <link rel='wlwmanifest' href={`${baseURL}www.example.com/wp-includes/wlwmanifest.xml`} type='application/wlwmanifest+xml' />
        <link rel='alternate' href={`${baseURL}rss`} type='application/rss+xml' title='RSS' />
        <link rel='alternate' href={`${baseURL}feed.atom`} type='application/atom+xml' title='Atom 0.3' />
        <link rel='icon' href={`${baseURL}${claw}`} type='image/png' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
