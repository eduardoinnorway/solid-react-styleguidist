import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import '@inrupt/solid-style-guide'; // eslint-disable-line

export default function Link({
								 className,
								 filled,
								 gradient,
								 secondary,
								 tertiary,
								 tertiary1,
								 tertiary2,
								 tertiary3,
								 onClick,
								 primary,
								 href,
								 target,
								 children
}) {
	const classDefault = classNames(
		'ids-link',
		className,
	);
	const  classesFilled = classNames(
		className,
		{
			'ids-link-filled': filled,
			'ids-link-filled--primary': primary,
			'ids-link-filled--primary-gradient': gradient,
			'ids-link-filled--secondary': secondary,
			'ids-link-filled--tertiary': tertiary,
			'ids-link-filled--tertiary-1': tertiary1,
			'ids-link-filled--tertiary-2': tertiary2,
			'ids-link-filled--tertiary-3': tertiary3,
		}
	);
	return (
		<a
			href={href}
			className={filled ? classesFilled : classDefault}
			onClick={onClick}
			target={target ? target : undefined}
		>
			{children}
		</a>
	);
}
Link.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	target: PropTypes.string,
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
Link.defaultProps = {
	onClick: () => {},
	filled: false,
	href: '',
	target: '',
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
