import { create } from '@storybook/theming';

export default create({
	base: 'light',

	// Storybook-specific color palette
	colorPrimary: 'rgba(91, 106, 217, 0.9)',
	colorSecondary: 'rgba(227, 172, 232, .9)',

	// Fonts
	fontBase: '"Source Sans Pro", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Like A Finch CRA Template',
	brandImage: '/logo-wide.png',
});
