import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Global } from '@emotion/react';
import { GlobalStyles, css } from 'twin.macro';
import '@fontsource/source-sans-pro';

const baseStyles = css`
	*,
	*:before,
	*:after {
		font-family: 'Source Sans Pro';
		box-sizing: border-box;
		outline: none;
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button,
		&::-webkit-scrollbar {
			-webkit-appearance: none;
		}
	}
`;

const GlobalStylesWrapper = ({ children }) => (
	<Fragment>
		<GlobalStyles />
		<Global styles={baseStyles} />
		{children}
	</Fragment>
);

GlobalStylesWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default GlobalStylesWrapper;
