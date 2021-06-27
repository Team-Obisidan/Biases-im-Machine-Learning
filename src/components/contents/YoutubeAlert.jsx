
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {Footnotes} from '@team-obisidan/react-footnotes';
import {YouTubeExpandable} from './expandables/YouTubeExpandable.jsx';
const MySwal = withReactContent(Swal);

export function youtubeAlert(title = 'Never gonna give you up', iconColor = '#c79a00', slug = 'dQw4w9WgXcQ', iconHtml = '😁', rickMode = true) {
	MySwal.fire({
		title,
		html: rickMode ? getBody(slug) : getNormalBody(slug),
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

function getNormalBody(slug) {
	return (<YouTubeExpandable autoplay slug={slug}/>);
}

function getBody(slug) {
	return (
		<Footnotes>
			{({Footnote, getFootnotes}) => (
				<>
					<YouTubeExpandable autoplay slug={slug}/>
					<Footnote i={1} desc="Vgl. Astley 1987">
						Oooh <br/>
						We&apos;re no strangers to love<br/>
						You know the rules and so do I<br/>
						A full commitment&apos;s what I&apos;m thinking of<br/>
						You wouldn&apos;t get this from any other guy<br/>
						<br/>
						I just wanna tell you how I&apos;m feeling<br/>
						Gotta make you understand<br/>
						<br/>
						Never gonna give you up<br/>
						Never gonna let you down<br/>
						Never gonna run around and desert you<br/>
						Never gonna make you cry<br/>
						Never gonna say goodbye<br/>
						Never gonna tell a lie and hurt you<br/>
						<br/>
						We&apos;ve known each other for so long<br/>
						Your heart&apos;s been aching, but you&apos;re too shy to say it<br/>
						Inside, we both know what&apos;s been going on<br/>
						We know the game and we&apos;re gonna play it<br/>
						<br/>
						And if you ask me how I&apos;m feeling<br/>
						Don&apos;t tell me you&apos;re too blind to see<br/>

						Never gonna give you up<br/>
						Never gonna let you down<br/>
						Never gonna run around and desert you<br/>
						Never gonna make you cry<br/>
						Never gonna say goodbye<br/>
						Never gonna tell a lie and hurt you<br/>
						<br/>
						Never gonna give you up<br/>
						Never gonna let you down<br/>
						Never gonna run around and desert you<br/>
						Never gonna make you cry<br/>
						Never gonna say goodbye<br/>
						Never gonna tell a lie and hurt you<br/>
						<br/>
						<br/>
						(Ooh, give you up)<br/>
						(Ooh, give you up)<br/>
						<br/>
						Never gonna give, never gonna give<br/>
						<br/>
						(Give you up)<br/>
						<br/>
						Never gonna give, never gonna give<br/>
						<br/>
						(Give you up)<br/>
						<br/>
						<br/>
						We&apos;ve known each other for so long<br/>
						Your heart&apos;s been aching, but you&apos;re too shy to say it<br/>
						Inside, we both know what&apos;s been going on<br/>
						We know the game and we&apos;re gonna play it<br/>
						<br/>
						I just wanna tell you how I&apos;m feeling<br/>
						Gotta make you understand<br/>
						<br/>
						Never gonna give you up<br/>
						Never gonna let you down<br/>
						Never gonna run around and desert you<br/>
						Never gonna make you cry<br/>
						Never gonna say goodbye<br/>
						Never gonna tell a lie and hurt you<br/>
						<br/>
						Never gonna give you up<br/>
						Never gonna let you down<br/>
						Never gonna run around and desert you<br/>
						Never gonna make you cry<br/>
						Never gonna say goodbye<br/>
						Never gonna tell a lie and hurt you<br/>
						<br/>
						Never gonna give you up<br/>
						Never gonna let you down<br/>
						Never gonna run around and desert you<br/>
						Never gonna make you cry<br/>
						Never gonna say goodbye<br/>
						Never gonna tell a lie and hurt you<br/>
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
