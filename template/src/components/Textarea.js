import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, AreaField } from './SharedTwElements';

const Textarea = forwardRef(function Textarea(props, inputRef) {
	const { label, name, color, error, width, height, ...textAreaProps } = props;
	return (
		<Wrapper width={width}>
			<Label htmlFor={name} color={color} error={error}>
				{label}
			</Label>
			<AreaField
				data-testid={'textarea'}
				id={name}
				name={name}
				error={error}
				ref={inputRef}
				color={color}
				height={height}
				{...textAreaProps}
			/>
		</Wrapper>
	);
});

Textarea.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired,
	width: PropTypes.oneOf(['quarter', 'third', 'half', 'twothirds', 'fill'])
		.isRequired,
	height: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']).isRequired,
	color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};

Textarea.defaultProps = {
	label: '',
	name: '',
	error: false,
	width: 'fill',
	color: 'primary',
	height: 'lg',
};

export default Textarea;
