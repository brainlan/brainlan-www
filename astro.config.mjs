import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

let adapter = vercel({
  webAnalytics: {
    enabled: true,
    maxDuration: 60,
  },
});

let site = "https://www.brainlan.com";

// https://astro.build/config
export default defineConfig({
  site,
  output: "hybrid",
  adapter,
});
