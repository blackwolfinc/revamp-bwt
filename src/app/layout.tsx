import { Inter } from "next/font/google";
import Head from "next/head";
import claw from '../../public/assets/img/claw.png'

import "./globals.css";
import "../assets/css/animate.css";
import React from 'react'; // Import React from 'react'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const baseURL = "https://www.blackwolftech.id/";

// Define RootLayout function component
export default function RootLayout({ children }: any) {
  // Define metadata variables
  const title = "Black Wolf Tech Indonesia | Cutting-Edge Software Solutions";
  const description = "Empower your business with cutting-edge software solutions from Black Wolf Tech Indonesia. Specializing in innovative technology, we deliver tailored software solutions to drive your success.";
  const keywords = "Black Wolf Tech, software development, technology solutions, Indonesia, innovation";
  const robots = "index, follow";
  const viewport = "width=device-width, initial-scale=1.0";

  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Authors meta tag */}
        <meta name="authors" content={"Black Wolf Tech Indonesia"} />
        {/* Other meta tags */}
        <meta name="robots" content={robots} />
        <meta name="viewport" content={viewport} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseURL}${claw}`} />
        <meta property="og:url" content={baseURL} />
        <meta property="og:type" content="website" />
        {/* Additional meta tags */}
        <link rel='canonical' href={baseURL} />
        <link rel='icon' href={`${baseURL}${claw}`} type='image/png' />
        <link rel='alternate' type='application/rss+xml' title='RSS' href={`${baseURL}rss`} />
        <link rel='alternate' type='application/atom+xml' title='Atom 0.3' href={`${baseURL}feed.atom`} />
      </Head>
      <body className={inter.className}>
     

        {children}
        
        <Analytics /></body>
    </html>
  );
}
