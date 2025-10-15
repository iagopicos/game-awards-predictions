import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    ],

    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                additionalData: `@use "${path.join(process.cwd(), 'src/_mantine').replace(/\\/g, '/')}" as mantine;`,
            },
        },
    },
})
