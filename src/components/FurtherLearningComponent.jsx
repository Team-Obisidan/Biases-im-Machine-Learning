import React, {Component} from 'react';
import {SourcesComponent} from './contents/SourcesComponent.jsx';
import {youtubeAlert} from './contents/YoutubeAlert.jsx';

export class FurtherLearningComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">

					<div className="more col-lg-7">

						<div className="more1">
							<h6>Mehr zu den Themen:</h6>

							<div className="mo-boxen">

								<div className="box1 useme" onClick={() => youtubeAlert()}>
									<p>Arten masch. Lernen</p>
								</div>

								<div className="box2 useme" onClick={() => youtubeAlert()}>
									<p>Studie KI</p>
								</div>

								<div className="box1 useme" onClick={() => youtubeAlert()}>
									<p>Paper IEEE</p>
								</div>

								<div className="box2 useme" onClick={() => youtubeAlert()}>
									<p>Weitere Beispiele</p>
								</div>

							</div>

						</div>

					</div>

					<div className="quellen col-lg-4">
						<SourcesComponent/>
					</div>

				</div>
			</div>
		);
	}
}
