import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  type: "module",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "pages/about.html"),
        carees: resolve(__dirname, "pages/carees.html"),
        security: resolve(__dirname, "pages/security.html"),
        login: resolve(__dirname, "pages/login.html"),
        signUp: resolve(__dirname, "pages/signUp.html"),
      },
    },
  },
});
