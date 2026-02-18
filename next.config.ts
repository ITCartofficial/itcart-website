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
        source: "/services/devOps%20services",
        destination: "/services/devops-services",
        permanent: true,
      },
      {
        source: "/services/data%20analytics",
        destination: "/services/data-analytics",
        permanent: true,
      },
      {
        source: "/industry/industrial%20and%20manufacturing",
        destination: "/industry/industrial-and-manufacturing",
        permanent: true,
      },
      {
        source: "/industry/banking%20and%20finance",
        destination: "/industry/banking-and-finance",
        permanent: true,
      },
      {
        source: "/services/devops%20services",
        destination: "/services/devops-services",
        permanent: true,
      },
      {
        source: "/industry/transportation%20and%20logistics",
        destination: "/industry/transportation-and-logistics",
        permanent: true,
      },
      {
        source: "/services/managed%20it%20services",
        destination: "/services/managed-it-services",
        permanent: true,
      },
      {
        source: "/industry/public%20sector",
        destination: "/industry/public-sector",
        permanent: true,
      },
      {
        source: "/industry/Automotive",
        destination: "/industry/automotive",
        permanent: true,
      },
      {
        source: "/services/cybersecurity%20services",
        destination: "/services/cybersecurity-services",
        permanent: true,
      },
      {
        source: "/industry/ducation",
        destination: "/industry/education",
        permanent: true,
      },
      {
        source: "/industry/Airlines",
        destination: "/industry/airlines",
        permanent: true,
      },
      {
        source: "/our-verticals/AiXBFS",
        destination: "/products/aixbfs",
        permanent: true,
      },
      {
        source: "/our-verticals/AiXHealthcare",
        destination: "/products/aixhealthcare",
        permanent: true,
      },
      {
        source: "/our-verticals/aixqp",
        destination: "/products/aixqp",
        permanent: true,
      },
      {
        source: "/our-verticals/insureaix",
        destination: "/products/insureaix",
        permanent: true,
      },
      {
        source: "/our-verticals/aixdesk",
        destination: "/products/aixdesk",
        permanent: true,
      },
      {
        source: "/our-verticals/aixfintech",
        destination: "/products/aixfintech",
        permanent: true,
      },
      {
        source: "/our-verticals/aixhealthcare",
        destination: "/products/aixhealthcare",
        permanent: true,
      },
      {
        source: "/our-verticals/aixlifecare",
        destination: "/products/aixlifecare",
        permanent: true,
      },
      {
        source: "/our-verticals/aixbfs",
        destination: "/products/aixbfs",
        permanent: true,
      },
      {
        source: "/our-verticals/rcmaix",
        destination: "/products/rcmaix",
        permanent: true,
      },
      {
        source: "/our-verticals/aixerp",
        destination: "/products/aixerp",
        permanent: true,
      },
      {
        source: "/our-verticals/aixgrc",
        destination: "/products/aixgrc",
        permanent: true,
      },

      {
        source: "/our-verticals/cyberaix",
        destination: "/products/cyberaix",
        permanent: true,
      },
      {
        source: "/our-verticals/aixheat",
        destination: "/products/aixheat",
        permanent: true,
      },
      {
        source: "/our-verticals/aixrealty",
        destination: "/products/aixrealty",
        permanent: true,
      },
      {
        source: "/our-verticals/aixmotorsports",
        destination: "/products/aixmotorsports",
        permanent: true,
      },
      {
        source: "/our-verticals/aixenergy",
        destination: "/products/aixenergy",
        permanent: true,
      },
      {
        source: "/our-verticals/aixbfs",
        destination: "/products/aixbfs",
        permanent: true,
      },
      {
        source: "/our-verticals",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;