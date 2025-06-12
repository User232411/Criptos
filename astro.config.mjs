import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // o "edge" si prefieres edge functions

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
