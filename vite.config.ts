import { defineConfig, lazyPlugins } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["src/routeTree.gen.ts"],
    printWidth: 100,
    semi: true,
    singleQuote: false,
    trailingComma: "all",
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
    overrides: [
      {
        files: ["src/components/ui/**"],
        rules: {
          "typescript/restrict-template-expressions": "off",
        },
      },
    ],
  },
  resolve: { tsconfigPaths: true },
  plugins: lazyPlugins(() => [devtools(), tailwindcss(), tanstackStart(), viteReact()]),
});

export default config;
