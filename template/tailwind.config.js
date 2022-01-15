const themeColors = {
	primary: 'rgba(91, 106, 217, .9)',
	secondary: 'rgba(173, 206, 255, .9)',
	tertiary: 'rgba(227, 172, 232, .9)',
	'primary-light': 'rgba(91, 106, 217, .6)',
	'secondary-light': 'rgba(173, 206, 255, .6)',
	'tertiary-light': 'rgba(227, 172, 232, .6)',
	'primary-transparent': 'rgba(91, 106, 217, .3)',
	'secondary-transparent': 'rgba(173, 206, 255, .3)',
	'tertiary-transparent': 'rgba(227, 172, 232, .3)',
	main: '#222b2f',
	black: '#222b2f',
	'black-soft': 'rgb(35, 38, 43)',
	'black-link': 'rgba(10, 10, 20, 0.7)',
	highlight: 'rgba(255,255,255,.02)',
	lowlight: 'rgba(5, 5, 30, .014)',
	transparent: 'rgba(5, 5, 30, 0.007)',
};

module.exports = {
	theme: {
		borderWidth: {
			DEFAULT: '1.75px',
		},
		fontFamily: {
			sans: '"Source Sans Pro"',
		},
		extend: {
			backgroundColor: themeColors,
			textColor: themeColors,
			borderColor: {
				...themeColors,
				primary: themeColors['primary-transparent'],
				secondary: themeColors['secondary-transparent'],
				tertiary: themeColors['tertiary-transparent'],
			},
			width: {
				fill: '-webkit-fill-available',
			},
			grayscale: {
				2: 0.2,
				4: 0.4,
				6: 0.6,
				8: 0.8,
			},
		},
	},
	variants: {
		extend: {
			borderWidth: [
				'responsive',
				'dark',
				'group-hover',
				'focus-within',
				'hover',
				'focus',
			],
			grayscale: ['hover', 'focus'],
		},
	},
	plugins: [],
};
