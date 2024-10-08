import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-icons/md",
        "styled-components",
        "react/jsx-runtime",
        "@inubekit/button",
        "@inubekit/countdownbar",
        "@inubekit/foundations",
        "@inubekit/icon",
        "@inubekit/stack",
        "@inubekit/text",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
});
