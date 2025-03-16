import { defineConfig ,loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // For alias configuration

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.PNG'] ,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Add this line
=======
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: parseInt(env.VITE_PORT) || 3000, // ✅ Custom port from .env
      open: true,
      strictPort: true,
>>>>>>> 1c2ee4e26f662628cc475c6ea1008ccab5730be2
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // ✅ Allows imports like "@/components/Button"
      },
    },
    plugins: [
      react(), 
       tailwindcss() 
    ],
  };
});