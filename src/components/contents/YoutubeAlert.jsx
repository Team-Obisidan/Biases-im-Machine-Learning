
import React, {Fragment} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Footnotes} from 'react-footnotes';
import {YouTubeExpandable} from './expandables/YouTubeExpandable.jsx';
const MySwal = withReactContent(Swal);

export function youtubeAlert(title = 'Never gonna give you up', slug = 'dQw4w9WgXcQ', iconHtml = '⬤', iconColor = '#c79a00') {
	MySwal.fire({
		title,
		html: getBody(slug),
		iconColor,
		iconHtml,
		showCloseButton: true,
		closeButtonAriaLabel: 'Info schliessen',
		showCancelButton: false,
		showConfirmButton: false,
		focusConfirm: true
	});
}

function getBody(slug) {
	return (
		<Footnotes>
			{({Footnote, getFootnotes}) => (
				<>
					<Footnote i={1} desc="Vgl. Kleesiek u. a. 2021, S. 2">
						<YouTubeExpandable slug={slug}/>
					</Footnote>
					<hr/>
					{getFooter(getFootnotes)}
				</>
			)}
		</Footnotes>
	);
}

function getFooter(getFootnotes) {
	return (
		<ol>
			{Object.keys(getFootnotes()).map(i => {
				return (
					<><sup>{i}</sup>{getFootnotes()[i].desc}</>
				);
			})}
		</ol>
	);
}
