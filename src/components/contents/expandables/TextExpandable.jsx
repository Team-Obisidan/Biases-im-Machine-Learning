import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const TextExpandable = props => {
	return (
		<div style={{cursor: 'pointer'}} onClick={() => textAlert(props.title, props.children)}>
			<h4>{props.title}</h4>
			<p>
				{typeof props.children == 'string' ? trunc(props.children, props.length) : props.children}
			</p>
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
		focusConfirm: true
	});
}

function trunc(str, length = 500){
	let arr = str.split("").splice(0, length);

	if(str.length < length || arr.lastIndexOf(" ") == -1)
		return str;


	
	let space = arr.lastIndexOf(" ");
	let trim = arr.splice(0, space);
	
	return trim.join("") + " [...]"

}
