import React from 'react';
import PropTypes from 'prop-types';
import '@inrupt/solid-style-guide'; // eslint-disable-line

export default function Input({
								  className,
								  type,
								  ...rest
}) {
	return (
		<input type={type} className={className} {...rest} />
	);
}
Input.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
};
Input.defaultProps = {
	className: '',
	type: 'text',
};
