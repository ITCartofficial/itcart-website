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
        source: "/our-verticals/aixhub",
        destination: "/products/aixhub",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixbfs",
        destination: "/products/aixbfs",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixqp",
        destination: "/products/aixqp",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/insureaix",
        destination: "/products/insureaix",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixdesk",
        destination: "/products/aixdesk",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixfintech",
        destination: "/products/aixfintech",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixhealthcare",
        destination: "/products/aixhealthcare",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixlifecare",
        destination: "/products/aixlifecare",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixbfs",
        destination: "/products/aixbfs",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/rcmaix",
        destination: "/products/rcmaix",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixerp",
        destination: "/products/aixerp",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixgrc",
        destination: "/products/aixgrc",
        permanent: true,              // 301/308 permanent
      },

      {
        source: "/our-verticals/cyberaix",
        destination: "/products/cyberaix",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixheat",
        destination: "/products/aixheat",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixrealty",
        destination: "/products/aixrealty",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixmotorsports",
        destination: "/products/aixmotorsports",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixenergy",
        destination: "/products/aixenergy",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals/aixbfs",
        destination: "/products/aixbfs",
        permanent: true,              // 301/308 permanent
      },
      {
        source: "/our-verticals",
        destination: "/products",
        permanent: true,              // 301/308 permanent
      },
    ];
  },
};

export default nextConfig;

