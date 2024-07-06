import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    // host:'localhost',
    // port:'5173',
    proxy: {
      '/api':'https://backend-capstone-production.up.railway.app',
    },
  },
  plugins: [react()],
});
