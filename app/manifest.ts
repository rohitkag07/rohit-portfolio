import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rohit Kag",
    short_name: "Rohit Kag",
    description:
      "AI automation developer and full-stack product builder working with React, Next.js, Supabase, and AI workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
