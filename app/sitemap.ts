import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goodluckreuben.netlify.app";
  const lastModified = new Date();
  return [
    {
      url: baseUrl,
      lastModified,
    },
    {
      url: `${baseUrl}/project/photoverse`,
      lastModified,
    },
    {
      url: `${baseUrl}/project/chaindustry-app`,
      lastModified,
    },
  ];
}
