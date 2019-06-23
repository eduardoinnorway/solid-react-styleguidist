import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import '@inrupt/solid-style-guide'; // eslint-disable-line

export default function Card({
								 className,
								 interactive,
								 onClick,
								 children
}) {
	const classDefault = classNames(
		'card',
		className,
		{
			interactive,
		}
	);
	return (
		<div
			role="presentation"
			className={classDefault}
			onClick={onClick}
		>
			{children}
		</div>
	);
}
Card.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	interactive: PropTypes.bool,
	onClick: PropTypes.func,
};
Card.defaultProps = {
	onClick: () => {},
	interactive: false,
	className: '',
};
