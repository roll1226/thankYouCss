import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import path from "path";
import glob from "glob";
import { fileURLToPath } from "node:url";
import tsconfigPaths from "vite-tsconfig-paths";

const rootValue = path.resolve(__dirname, "src");
const publicDirValue = path.resolve(__dirname, "public");
const outDirValue = path.resolve(__dirname, "dist");

export default defineConfig({
  root: rootValue,
  server: {
    port: 3000,
  },
  publicDir: publicDirValue,
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    outDir: outDirValue,
    emptyOutDir: true,
    minify: "esbuild",
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(path.resolve(rootValue, "*.html"))
          .map((file) => [
            path.relative(
              rootValue,
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: (assertInfo) => {
          let extType = assertInfo.name?.split(".")[1];
          if (extType === undefined) throw new Error("Not Search File Type");
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = "fonts";
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          if (extType === "css") {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
      },
    },
  },
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": rootValue,
      "~": publicDirValue,
    },
  },
});
