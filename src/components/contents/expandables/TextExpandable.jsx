import React from 'react';
import {AbstractTextExpandable} from './AbstractTextExpandable.jsx';

export const TextExpandable = props => {
	return (

		<AbstractTextExpandable title={props.title} iconHtml={props.iconHtml} iconColor={props.iconColor}>
			<h4>{props.title}</h4>
			<p>
				{typeof props.children === 'string' ? trunc(props.children, props.length) : props.children}
			</p>
			<p>
				{props.children}
			</p>
		</AbstractTextExpandable>

	);
};

function trunc(string, length = 500) {
	const array = string.split('').splice(0, length);

	if (string.length < length || array.lastIndexOf(' ') === -1) {
		return string;
	}

	const space = array.lastIndexOf(' ');
	const trim = array.splice(0, space);

	return trim.join('') + ' [...]';
}
