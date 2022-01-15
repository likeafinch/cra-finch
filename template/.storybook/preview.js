import GlobalStylesWrapper from '../src/utils/GlobalStylesWrapper';

export const decorators = [
	(Story) => (
		<GlobalStylesWrapper>
			<Story />
		</GlobalStylesWrapper>
	),
];
