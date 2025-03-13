import { defineConfig ,loadEnv} from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // For alias configuration

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: parseInt(env.VITE_PORT) || 3000, // ✅ Custom port from .env
      open: true,
      strictPort: true,
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