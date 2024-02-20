import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

let adapter = vercel({
  webAnalytics: {
    enabled: true,
    maxDuration: 60,
  },
});

let site = "https://www.brainlan.com";

if (process.argv[3] === "--node") {
  adapter = node({ mode: "standalone" });
  site = "http://localhost:4321";
}

export default defineConfig({
  site,
  output: "hybrid",
  adapter,
});
