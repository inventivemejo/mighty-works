import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Mighty Works",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7f5",
    theme_color: "#0f2a1f",
    lang: "en-IN",
    categories: ["business", "productivity"],
  };
}
