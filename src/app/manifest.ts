import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "شركة الوسيط - نقل الأثاث",
    short_name: "الوسيط",
    description: "شركة الوسيط الرائدة في نقل وترحيل الأثاث في الأردن",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1929",
    theme_color: "#d4af37",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
