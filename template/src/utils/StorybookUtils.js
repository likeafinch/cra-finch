import {
	heightStyles,
	widthStyles,
	colorStyles,
} from '../components/SharedTwElements';

export const widthStoriesController = Object.keys(widthStyles).reduce(
	(prev, next) => ({
		...prev,
		[next]:
			next === 'twothirds'
				? 'Two Thirds Width'
				: `${next.substring(0, 1).toUpperCase()}${next.substring(1)} Width`,
	}),
	{}
);

export const heightStoriesController = Object.keys(heightStyles).reduce(
	(prev, next) => ({
		...prev,
		[next]: next.toUpperCase(),
	}),
	{}
);

export const colorStoriesController = Object.keys(colorStyles).reduce(
	(prev, next) => ({
		...prev,
		[next]: next.toUpperCase(),
	}),
	{}
);
