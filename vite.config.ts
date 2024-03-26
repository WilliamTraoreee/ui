import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import dts from 'vite-plugin-dts';
import path from 'node:path';

export default defineConfig({
	plugins: [
		UnoCSS(),
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'WillUI',
			formats: ['es'],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'unocss'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
