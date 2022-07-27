import laravel from 'laravel-vite-plugin';
import {defineConfig} from 'vite';
import vue from "@vitejs/plugin-vue";
const path = require("path");
export default defineConfig({
    plugins: [
        laravel([
            // 'resources/css/app.css',
            'resources/js/app.js',
        ]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});