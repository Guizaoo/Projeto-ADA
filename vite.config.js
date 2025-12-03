import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// semopre chamar com ()
export default defineConfig({
  plugins: [tailwindcss(),react()],
});