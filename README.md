# WillUI

WillUI is a personal UI library made for work with `React` + `UnoCSS` + `InertiaJS`

## I don't recommand to install this library

This library is made for my utilisation and some breaking change can appear without communication about it.

All external issue will be automatically close.

## Installation

`npm i @wtraore/ui`

### CSS

import the css file in your project

```js
import '@wtraore/ui/style.css';
```

### UnoCSS configuration

```js
import { defineConfig } from 'unocss';
import {
	presetAttributify,
	presetIcons,
	presetUno,
	presetWebFonts,
} from 'unocss';
import presetWill from '@wtraore/ui/preset';

export default defineConfig({
	content: {
		pipeline: {
			include: [
				'src/**/*.{js,jsx,ts,tsx}',
				/@wtraore\/ui\/[A-Za-z0-9]+\/[A-Za-z]+\.(es.js|js|ts|tsx)/,
			],
		},
	},
	presets: [
		presetWill(),
		presetUno(),
		presetAttributify(),
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
				sans: ['Satoshi', 'ui-sans-serif'],
			},
		}),
		presetIcons({
			collections: {
				ri: () => import('@iconify-json/ri/icons.json').then((i) => i.default),
			},
		}),
	],
});
```
