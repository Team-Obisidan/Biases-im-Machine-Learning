import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {youtubeAlert} from './YoutubeAlert.jsx';
import {LibraryExpandable} from './expandables/LibraryExpandable.jsx';

export class SourcesComponent extends Component {
	render() {
		return (

			<div className="quellen1">
				<h6>Videos und Quellen:</h6>
				<div className="quellen2 ">
					<span className="green-span useme" onClick={() => youtubeAlert()}>
						<FontAwesomeIcon icon={faYoutube} size="5x"/>
					</span>
					<span className="green-span ml20px useme">
						<LibraryExpandable/>
					</span>
				</div>
			</div>
		);
	}
}
