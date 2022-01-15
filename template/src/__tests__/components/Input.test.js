import { fireEvent, render } from '@testing-library/react';
import Input from '../../components/Input';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = () => {
	const utils = render(<Input />);
	const input = utils.getByTestId('input');
	return {
		input,
		...utils,
	};
};

test('Input should render correctly', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});

test('Input should update internal value when onChange fired', () => {
	const { input } = setup();

	fireEvent.change(input, {
		target: {
			value: 'test',
		},
	});

	expect(input.value).toBe('test');
});
