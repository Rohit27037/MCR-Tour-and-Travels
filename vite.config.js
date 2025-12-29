import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// IMPORTANT: base './' makes built assets use relative paths which works on GitHub Pages
export default defineConfig({
plugins: [react()],
base: './'
})