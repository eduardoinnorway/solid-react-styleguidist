import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import '@inrupt/solid-style-guide'; // eslint-disable-line

export default function InputWrap({
								 className,
								 children
}) {
	const classDefault = classNames(
		'input-wrap',
		className,
	);
	return (
		<div
			className={classDefault}
		>
			{children}
		</div>
	);
}
InputWrap.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
InputWrap.defaultProps = {
	className: '',
};
