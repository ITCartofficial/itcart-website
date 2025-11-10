// import { Montserrat } from "next/font/google"

// import "./globals.css";
// import Header from "@/components/layouts/Header";
// import Footer from "@/components/layouts/Footer";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

// export const metadata = {
//   title: "Best AI Automation Company In US | iTCART",
//   description:
//     "iTCart - The best AI automation company in US, offering cutting-edge solutions to streamline workflows, enhance efficiency, and drive business growth.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.png" />
//         <meta name="google-site-verification" content="EiiZ4vW05H-lFA-UxhWR58tkbzRGzWOanciSP24li0U" />
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-WGD87T7WM1"></script>
//         <script>   window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments)}   gtag('js', new Date());   gtag('config', 'G-WGD87T7WM1'); </script>
//       </head>
//       <body
//         className={`w-full overflow-x-hidden ${montserrat.variable} font-sans antialiased relative`}
//       >
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }


import { Montserrat } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Best AI Automation Company In US | iTCART",
  description:
    "iTCart - The best AI automation company in US, offering cutting-edge solutions to streamline workflows, enhance efficiency, and drive business growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Best AI Automation Services & IT Solutions for Enterprises | itcart</title>
        <meta name="description" content="Scale faster with AI automation, RPA services, IT solutions, intelligent process automation, cloud migration, AI consulting, software development & managed IT services globally" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="EiiZ4vW05H-lFA-UxhWR58tkbzRGzWOanciSP24li0U"
        />

      </head>
      <body
        className={`w-full overflow-x-hidden ${montserrat.variable} font-sans antialiased relative`}
      >
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />

        {/* ✅ Google Analytics Scripts */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WGD87T7WM1"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WGD87T7WM1');
          `}
        </Script>
      </body>
    </html>
  );
}