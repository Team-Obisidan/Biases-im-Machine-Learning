import React, {Component} from 'react';
import { AbstractTextExpandable } from './contents/expandables/AbstractTextExpandable.jsx';

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
							
								
								
								<AbstractTextExpandable className="box1 useme" iconColor="#9CCC65" iconHtml="&#9632;">
								
									<p>Arten masch. Lernen</p>
									
								
								<span></span>
								<div>
									penis
								</div>
								</AbstractTextExpandable>

								<a className="text-decoration-none "  id="t" href="https://queue.acm.org/detail.cfm?id=3466134" target="_blank">
								<div className="useme">
									<p>Paper ACM - Biases in AI Systems</p>
								</div>
								</a>

								<a className="text-decoration-none" href="https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf" target="_blank">
								<div className="useme" >
									<p>PWC Studie zur KI</p>
								</div>
								</a>

								
								<AbstractTextExpandable className="box2 useme" iconColor="#FFCA28" iconHtml="&#9632;">
								
									<p>Weitere Beispiele</p>
									
								
								<span></span>
								<div>
									penis
								</div>
								</AbstractTextExpandable>

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
