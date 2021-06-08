import React, { Fragment } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export const TextExpandable = (props) => {
    return(<div style={{cursor: "pointer"}} onClick={() => textAlert(props.title, props.children)}>
    <h4>{props.title}</h4>
    <p>
        {props.children}
    </p>
    </div>)
}


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
