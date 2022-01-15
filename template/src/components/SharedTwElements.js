import tw, { styled } from 'twin.macro';

export const widthStyles = {
	quarter: tw`w-1/4`,
	third: tw`w-1/3`,
	half: tw`w-1/2`,
	twothirds: tw`w-2/3`,
	fill: tw`w-fill`,
};

export const heightStyles = {
	xs: tw`h-12`,
	sm: tw`h-24`,
	base: tw`h-32`,
	lg: tw`h-48`,
	xl: tw`h-56`,
};

export const colorStyles = {
	primary: tw`text-primary`,
	secondary: tw`text-secondary`,
	tertiary: tw`text-tertiary`,
};

export const borderStyles = {
	primary: tw`border-primary`,
	secondary: tw`border-secondary`,
	tertiary: tw`border-tertiary`,
};

export const Wrapper = styled.div(({ width }) => [
	tw`relative flex flex-col justify-center mb-6 no-underline rounded`,
	widthStyles[width],
]);

export const Label = styled.label(({ error, color }) => [
	tw`inline-flex mb-2 text-base tracking-wide uppercase`,
	colorStyles[color],
	error && tw`text-pink-600 border-pink-600`,
]);

export const Field = styled.input(({ error, color }) => [
	tw`w-auto
		tracking-wide
		opacity-90
		bg-transparent
		border-width[2px]
		border-opacity-5
		text-base
		h-11
		px-3
		rounded
		focus:bg-highlight
		transition-all`,
	colorStyles[color],
	borderStyles[color],
	error ? tw`text-pink-600 border-pink-600` : colorStyles[color],
]);

export const AreaField = styled.textarea(({ error, color, height }) => [
	tw`w-full
		tracking-wide
		opacity-90
		bg-transparent
		text-main
		text-base
		border-width[2px]
		p-3
		outline-none
		rounded
		focus:bg-highlight
		transition-all
		resize-none`,
	colorStyles[color],
	borderStyles[color],
	heightStyles[height],
	error ? tw`text-pink-600 border-pink-600` : colorStyles[color],
]);
