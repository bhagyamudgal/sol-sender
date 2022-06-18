import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        NodeGlobalsPolyfillPlugin({
            buffer: true,
        }),
    ],
});
