import React, {Component} from 'react';
import {SourcesComponent} from './contents/SourcesComponent.jsx';

export class FurtherLearningComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">

					<div className="more col-lg-7">

						<div className="more1">
							<h6>Mehr zu den Themen:</h6>

							<div className="mo-boxen">

								<div className="box1 useme">
									<p>text</p>
								</div>

								<div className="box2 useme">
									<p>text</p>
								</div>

								<div className="box1 useme"/>

								<div className="box2 useme"/>

								<div className="box1 useme"/>

								<div className="box2 useme"/>

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
