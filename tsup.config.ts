import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/preset.ts'],
	clean: true,
	format: ['esm'],
	external: [
		'react',
		'react-dom',
		'unocss',
		'react/jsx-runtime',
		'@inertiajs/react',
		'framer-motion',
		'@ark-ui/react',
	],
	dts: true,
	minify: true,
});
