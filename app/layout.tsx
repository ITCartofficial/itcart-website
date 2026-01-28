import { Montserrat } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// export const metadata = {
//   title: "",
//   description:
//     "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <meta name="facebook-domain-verification" content="h9ia1mpal7yziz61mzoirm0x233y9d" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l!='dataLayer' ? '&l='+l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MNSXNLQZ');
  `}
        </Script>

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
        <a
          href="https://wa.me/918088849174"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white w-fit fixed top-150 right-0 cursor-pointer p-2 rounded-full z-50 shadow-lg">
            <Image
              width={35}
              height={35}
              src="/icons/whatsapp.png"
              alt="whatsapp"
            />
          </div>
        </a>
        {/* <div className="bg-white w-fit absolute top-150 right-0 fixed cursor-pointer p-2 rounded-full z-50 shadow-lg">
          <Image
            width={35}
            height={35}
            src="/icons/whatsapp.png"
            alt=""
          />
        </div> */}

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

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MNSXNLQZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>






      </body>

    </html>
  );
}