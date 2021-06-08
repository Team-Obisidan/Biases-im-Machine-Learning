import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import {youtubeAlert} from './contents/YoutubeAlert.jsx';
export class FeatureComponent extends Component {
	render() {
		return (
			<div className="theorie">
				<div className="container">
					<div className="row">
						<div className="th-topic col-lg-4">
							<h2>ML</h2>

							<div className="th-kreis1 useme" onClick={() => youtubeAlert()}>
								<span className="white-span">
									<FontAwesomeIcon icon={faYoutube} size="5x"/>
								</span>
							</div>

						</div>

						<div className="th-topic col-lg-4">
							<h2>Biases</h2>
							<div className="th-kreis2 useme" onClick={() => youtubeAlert()}>
								<span className="white-span">
									<FontAwesomeIcon icon={faYoutube} size="5x"/>
								</span>
							</div>
						</div>
						<div className="th-topic col-lg-4">
							<h2>Gesellschaft</h2>
							<div className="th-kreis3 useme" onClick={() => youtubeAlert()}>
								<span className="white-span">
									<FontAwesomeIcon icon={faYoutube} size="5x"/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

