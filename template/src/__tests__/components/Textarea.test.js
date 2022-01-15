import { fireEvent, render } from '@testing-library/react';
import Textarea from '../../components/Textarea';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = () => {
	const utils = render(<Textarea />);
	const textarea = utils.getByTestId('textarea');
	return {
		textarea,
		...utils,
	};
};

test('Textarea should render correctly', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});

test('Textarea should update internal value when onChange fired', () => {
	const { textarea } = setup();

	fireEvent.change(textarea, {
		target: {
			value: 'test',
		},
	});

	expect(textarea.value).toBe('test');
});
