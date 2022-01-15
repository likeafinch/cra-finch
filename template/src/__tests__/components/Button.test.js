import { fireEvent, render } from '@testing-library/react';
import Button from '../../components/Button';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());

const setup = (props) => {
	const utils = render(<Button {...props} />);
	const button = utils.getByTestId('button');
	return {
		button,
		...utils,
	};
};

test('Button should render correctly', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});

test('calls "onClick" prop on button click', () => {
	// Render new instance in every test to prevent leaking state
	const onClick = jest.fn();
	const { button } = setup({ onClick });

	fireEvent.click(button);
	expect(onClick).toHaveBeenCalled();
});
