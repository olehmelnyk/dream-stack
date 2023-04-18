module.exports = {
  // Check Typescript files
  "**/*.(ts|tsx)": () => "pnpm type-check",

  // Lint and format files
  "**/*.{js,cjs,mjs,ts,tsx,md,json}": (filenames) => [
    "pnpm format",
    "pnpm lint:fix",
  ],
};
