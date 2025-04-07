import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 env:{
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  AUTH_SECRET: process.env.AUTH_SECRET,
 }
};

export default nextConfig;
