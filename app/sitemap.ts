import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goodluckreuben.netlify.app";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/project/photoverse`,
    },
    {
      url: `${baseUrl}/project/chaindustry-app`,
    },
  ];
}
