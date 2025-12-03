// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ['randomuser.me', 'itcart.io']
//   }
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: [
//       'randomuser.me',
//       'itcart.io',
//       'img.freepik.com' // ✅ added this line
//     ],
//   },
// };


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "randomuser.me",
//       },
//       {
//         protocol: "https",
//         hostname: "itcart.io",
//       },
//       {
//         protocol: "https",
//         hostname: "img.freepik.com",
//       },
//       {
//         protocol: "https",
//         hostname: "itcartaiwebsite.blob.core.windows.net", // ✅ Azure Blob Storage
//       },
//     ],
//   },
// };


// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "itcart.io" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "itcartaiwebsite.blob.core.windows.net" },
    ],
  },

  async redirects() {
    return [
      {
        source: "/our-verticals/:id*",   // your old path
        destination: "/products", // new path
        permanent: true,              // 301/308 permanent
      },
    ];
  },
};

export default nextConfig;

