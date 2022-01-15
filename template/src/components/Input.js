import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Field } from './SharedTwElements';

const Input = forwardRef(function Input(props, inputRef) {
	const { label, name, color, error, width, ...inputProps } = props;
	return (
		<Wrapper width={width}>
			<Label htmlFor={name} color={color} error={error}>
				{label}
			</Label>
			<Field
				data-testid={'input'}
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				color={color}
				{...inputProps}
			/>
		</Wrapper>
	);
});

Input.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired,
	width: PropTypes.oneOf(['quarter', 'third', 'half', 'twothirds', 'fill'])
		.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

Input.defaultProps = {
	label: '',
	name: '',
	error: false,
	width: 'fill',
	color: 'primary',
};

export default Input;
