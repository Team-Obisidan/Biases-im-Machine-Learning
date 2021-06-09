import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const AbstractTextExpandable = props => {
	if (props.titleDisplay) {
		props.titleDisplay = true;
	}

	return (
		<div style={{cursor: 'pointer'}} onClick={() => textAlert(props.title, props.children[2], props.iconHtml, props.iconColor)}>
			{props.children[0]}
			{props.children[1]}
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
