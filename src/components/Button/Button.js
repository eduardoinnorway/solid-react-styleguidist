import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import '@inrupt/solid-style-guide'; // eslint-disable-line

export default function Button({
								   className,
								   filled,
								   gradient,
								   secondary,
								   tertiary,
								   tertiary1,
								   tertiary2,
								   tertiary3,
								   onClick,
								   disabled,
								   primary,
								   type,
								   children
}) {
	const classDefault = classNames(
		'ids-button',
		className,
	);
	const  classesFilled = classNames(
		className,
		{
			'ids-button-filled': filled,
			'ids-button-filled--primary': primary,
			'ids-button-filled--primary-gradient': gradient,
			'ids-button-filled--secondary': secondary,
			'ids-button-filled--tertiary': tertiary,
			'ids-button-filled--tertiary-1': tertiary1,
			'ids-button-filled--tertiary-2': tertiary2,
			'ids-button-filled--tertiary-3': tertiary3,
		}
	);
	return (
		<button
			type={type}
			className={filled ? classesFilled : classDefault}
			onClick={onClick}
			disabled={disabled ? 'disabled' : undefined}
		>
			{children}
		</button>
	);
}
Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	filled: PropTypes.bool,
	primary: PropTypes.bool,
	gradient: PropTypes.bool,
	secondary: PropTypes.bool,
	tertiary: PropTypes.bool,
	tertiary1: PropTypes.bool,
	tertiary2: PropTypes.bool,
	tertiary3: PropTypes.bool,
};
Button.defaultProps = {
	onClick: () => {},
	filled: false,
	type: 'button',
	className: '',
	disabled: false,
	primary: false,
	gradient: false,
	secondary: false,
	tertiary: false,
	tertiary1: false,
	tertiary2: false,
	tertiary3: false,
};
