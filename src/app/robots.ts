import { MetadataRoute } from "next";

// ⚠️ Update to your custom domain when it goes live (e.g. https://nnpawarassociates.com)
const BASE_URL = "https://nnpawar.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
