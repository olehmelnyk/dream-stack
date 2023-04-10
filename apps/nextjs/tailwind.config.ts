import type { Config } from "tailwindcss";

import baseConfig from "@idid/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
