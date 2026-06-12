import { MetadataRoute } from "next";

// ⚠️ Replace with your actual deployed domain
const BASE_URL = "https://www.nnpawarassociates.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
