import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint2";
import path from "path";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    plugins: [react(), eslint({
        fix: true
    })],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                }
            }
        }
    }
});
