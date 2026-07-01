import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://panyinglvju.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/base`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/plans`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}
