/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 16/09/2022 - 18:22:18
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2022
 * - Author          : Michael
 * - Modification    :
 **/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,

    environment: "jsdom",

    setupFiles: "./setupTests.js",
  },
});
