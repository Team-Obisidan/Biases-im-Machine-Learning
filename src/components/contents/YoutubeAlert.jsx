
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export function youtubeAlert(title = 'Never gonna give you up', slug = 'dQw4w9WgXcQ', iconHtml = '⬤', iconColor = '#c79a00') {
	MySwal.fire({
		title,
		html: `<iframe width="100%" height="300" src="https://www.youtube-nocookie.com/embed/${slug}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
		iconColor,
		iconHtml,
		showCloseButton: true,
		closeButtonAriaLabel: 'Info schliessen',
		showCancelButton: false,
		showConfirmButton: false,
		focusConfirm: true
	});
}
