// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ['randomuser.me', 'itcart.io']
//   }
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'itcart.io',
      'img.freepik.com' // ✅ added this line
    ],
  },
};

export default nextConfig;
