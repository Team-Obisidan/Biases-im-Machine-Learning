import React, {Component} from 'react';
import { MlTypeComponent } from './contents/further/MlTypeComponent.jsx';
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
								

								<a className="text-decoration-none "  id="t" href="https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf" target="_blank">
								<div className="useme" onClick={() => youtubeAlert()}>
									<p>Paper IEEE</p>
								</div>
								</a>

								<a className="text-decoration-none" href="https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf" target="_blank">
								<div className="useme" onClick={() => youtubeAlert()}>
									<p>PWC Studie zur KI</p>
								</div>
								</a>

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
