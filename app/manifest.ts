import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CallAgentix",
    short_name: "CallAgentix",
    description: "AI voice agents for outbound sales and inbound customer support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/brand/callagentix-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
