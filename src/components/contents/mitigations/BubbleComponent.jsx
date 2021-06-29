import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {youtubeAlert} from '../YoutubeAlert.jsx';

export class BubbleComponent extends Component {
	render() {
		return (
			<>
				<div className="kreis1 useme shadow" onClick={() => youtubeAlert('Mitigation von Biases', '#66BB6A', '5bt9C0ikpb8', '⬤', false)}>
					<span className="white-span">
						<FontAwesomeIcon icon={faYoutube} size="4x"/>
					</span>
					<h5>Mitigation von Biases</h5>
				</div>

				
			</>

		);
	}
}
