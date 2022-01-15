import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import { widthStyles } from './SharedTwElements';
const variantStyles = {
	contained: {
		primary: tw`text-gray-50 bg-primary-light hover:cursor-pointer hover:bg-transparent hover:text-primary-light hover:border-primary-light hover:border-width[2px] hover:border-opacity-5`,
		secondary: tw`text-gray-50 bg-secondary-light hover:cursor-pointer hover:bg-transparent hover:text-secondary-light hover:border-secondary-light hover:border-width[2px] hover:border-opacity-5`,
		tertiary: tw`text-gray-50 bg-tertiary-light hover:cursor-pointer hover:bg-transparent hover:text-tertiary-light hover:border-tertiary-light hover:border-width[2px] hover:border-opacity-5`,
	},
	outlined: {
		primary: tw`border-width[2px] border-opacity-5 text-primary-light border-primary-light bg-transparent cursor-pointer hover:bg-primary-light hover:text-gray-50 hover:border-none`,
		secondary: tw`border-width[2px] border-opacity-5 text-secondary-light border-secondary-light bg-transparent cursor-pointer hover:bg-secondary-light hover:text-gray-50 hover:border-none`,
		tertiary: tw`border-width[2px] border-opacity-5 text-tertiary-light border-tertiary-light bg-transparent cursor-pointer hover:bg-tertiary-light hover:text-gray-50 hover:border-none`,
	},
};
const StyledButton = styled.button(({ width, variant, color, disabled }) => [
	tw`relative flex items-center justify-center mr-6 text-base font-bold tracking-wide uppercase transition transition-duration[.3s] rounded shadow-none h-11`,
	variantStyles[variant][color],
	widthStyles[width],
	disabled && tw`pointer-events-none grayscale-8`,
]);

const Button = ({ label, width, variant, color, disabled, ...buttonProps }) => (
	<StyledButton
		width={width}
		variant={variant}
		color={color}
		disabled={disabled}
		data-testid={'button'}
		{...buttonProps}
	>
		{label}
	</StyledButton>
);

Button.propTypes = {
	disabled: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(['contained', 'outlined']).isRequired,
	width: PropTypes.oneOf(['quarter', 'third', 'half', 'twothirds', 'fill'])
		.isRequired,
	color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
};
Button.defaultProps = {
	disabled: false,
	label: 'Label',
	width: 'fill',
	color: 'primary',
	variant: 'contained',
};
export default Button;
