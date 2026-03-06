// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,  // already have this for external access

    allowedHosts: [
      'alb-1807346755.us-east-1.elb.amazonaws.com',  // ← add your exact ALB DNS here
      // Or for safety + future-proof: allow all *.elb.amazonaws.com subdomains
      '.elb.amazonaws.com',
    ],

    // Optional: if you also get HMR websocket issues through ALB
    hmr: {
      clientPort: 80,         // or 443 if using HTTPS listener later
      // host: 'your-alb-dns-here',  // sometimes helps
    },
  },
})