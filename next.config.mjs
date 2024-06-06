/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.spoonacular.com",
        port: "",
        pathname: "/recipes/**",
      },
      {
        protocol: "https",
        hostname: "www.foodandspice.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "cooking2perfection.blogspot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.foodista.com",
        port: "",
        pathname: "/recipe/**",
      },
      {
        protocol: "https",
        hostname: "www.pinkwhen.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "mixandmatchmama.blogspot.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
