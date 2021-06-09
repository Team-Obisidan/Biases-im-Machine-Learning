import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const AbstractTextExpandable = props => {
	if(!!props.titleDisplay){
		props.titleDisplay= true;
	}
	console.log(props.children)
	return (
		<div style={{cursor: 'pointer'}} onClick={() => textAlert(props.title, props.children[2], props.iconHtml, props.iconColor)}>
			{props.titleDisplay ? <h4>{props.title}</h4> : <></>}
			{props.children[0]}
			{typeof props.children[1] === 'string' ? trunc(props.children[1], props.length) : props.children[1]}
		</div>
	);
};

export function textAlert(title, body, iconHtml = '⬤', iconColor = '#c79a00') {
	MySwal.fire({
		title,
		html: body,
		iconColor,
		iconHtml,
		showCloseButton: true,
		closeButtonAriaLabel: 'Info schliessen',
		showCancelButton: false,
		showConfirmButton: false,
		focusConfirm: true,
		customClass: {
			// HtmlContainer: 'swal-wide',
			popup: 'swal-wide'
		}
	});
}

function trunc(string, length = 500) {
	const array = string.split('').splice(0, length);

	if (string.length < length || array.lastIndexOf(' ') === -1) {
		return string;
	}

	const space = array.lastIndexOf(' ');
	const trim = array.splice(0, space);

	return trim.join('') + ' [...]';
}
