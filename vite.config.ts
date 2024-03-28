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
			entry: [
				path.resolve(__dirname, 'src/index.ts'),
				path.resolve(__dirname, 'src/preset.ts'),
			],
			name: 'WillUI',
			formats: ['es'],
			fileName: (format, entryName) => `${entryName}.js`,
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'unocss',
				'react/jsx-runtime',
				'@inertiajs/react',
				'framer-motion',
				'@ark-ui/react',
			],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
