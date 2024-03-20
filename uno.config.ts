import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
} from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
				sans: ['Satoshi', 'ui-sans-serif'],
				mono: ['JetBrains Mono', 'ui-monospace'],
			},
		}),
		presetIcons({
			collections: {
				ri: () => import('@iconify-json/ri/icons.json').then((i) => i.default),
			},
		}),
	],
});
