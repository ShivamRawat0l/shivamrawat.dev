import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	root: '.',
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'), // Correctly points @ to the project root
		},
	},
	plugins: [
		UnoCSS(),
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
});
