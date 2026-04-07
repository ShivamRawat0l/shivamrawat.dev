import { defineConfig } from 'unocss';

function getDirection(str: string, defaultValue = 'flex-start') {
	switch (str) {
		case 'between':
			return 'space-between';
		case 'start':
			return 'flex-start';
		case 'end':
			return 'flex-end';
		case 'center':
			return 'center';
	}
	return defaultValue;
}

export default defineConfig({
	presets: [],
	rules: [
		['flex', { flex: 1 }],
		[/^flex-(\d+)$'/, ([, c]) => ({ flex: c })],
		[/^flex-(row|column)$/, ([, d]) => ({ display: 'flex', 'flex-direction': d }), { layer: 'default' }],
		[
			/^flex-(.*)-(.*)-(.*)$/,
			(match) => {
				const justifyContent = getDirection(match[2]);
				const alignItem = getDirection(match[3], 'normal');
				return {
					display: 'flex',
					'flex-direction': match[1],
					'justify-content': justifyContent,
					'align-items': alignItem,
				};
			},
		],
		[/^m-(\d+)$/, (match) => ({ margin: `${match[1]}px` })],
		[/^mh-(\d+)$/, (match) => ({ 'margin-left': `${match[1]}px`, 'margin-right': `${match[1]}px` })],
		[/^mv-(\d+)$/, (match) => ({ 'margin-top': `${match[1]}px`, 'margin-bottom': `${match[1]}px` })],
		[/^mt-(\d+)$/, (match) => ({ 'margin-top': `${match[1]}px` })],
		[/^mr-(\d+)$/, (match) => ({ 'margin-right': `${match[1]}px` })],
		[/^ml-(\d+)$/, (match) => ({ 'margin-left': `${match[1]}px` })],
		[/^mb-(\d+)$/, (match) => ({ 'margin-bottom': `${match[1]}px` })],
		[/^p-(\d+)$/, (match) => ({ padding: `${match[1]}px` })],
		[/^ph-(\d+)$/, (match) => ({ 'padding-left': `${match[1]}px`, 'padding-right': `${match[1]}px` })],
		[/^pv-(\d+)$/, (match) => ({ 'padding-top': `${match[1]}px`, 'padding-bottom': `${match[1]}px` })],
		[/^pt-(\d+)$/, (match) => ({ 'padding-top': `${match[1]}px` })],
		[/^pr-(\d+)$/, (match) => ({ 'padding-right': `${match[1]}px` })],
		[/^pl-(\d+)$/, (match) => ({ 'padding-left': `${match[1]}px` })],
		[/^pb-(\d+)$/, (match) => ({ 'padding-bottom': `${match[1]}px` })],
		[/^rounded-tl-(\d+)$/, (match) => ({ 'border-top-left-radius': `${match[1]}px` })],
		[/^rounded-tr-(\d+)$/, (match) => ({ 'border-top-right-radius': `${match[1]}px` })],
		[/^rounded-bl-(\d+)$/, (match) => ({ 'border-bottom-left-radius': `${match[1]}px` })],
		[/^rounded-br-(\d+)$/, (match) => ({ 'border-bottom-right-radius': `${match[1]}px` })],
		[/^rounded-(\d+)$/, (match) => ({ 'border-radius': `${match[1]}px` })],
		[/^border-t-(\d+)$/, (match) => ({ 'border-top-width': `${match[1]}px` })],
		[/^border-r-(\d+)$/, (match) => ({ 'border-right-width': `${match[1]}px` })],
		[/^border-b-(\d+)$/, (match) => ({ 'border-bottom-width': `${match[1]}px` })],
		[/^border-l-(\d+)$/, (match) => ({ 'border-left-width': `${match[1]}px` })],
		[/^border-(\d+)$/, (match) => ({ 'border-width': `${match[1]}px` })],
	],
});
