import React, {Component} from 'react';
import {MLFutureOutlookComponent} from './contents/MlFutureOutlookComponent.jsx/index.js';
import {MLUsecaseComponent} from './contents/MlUsecaseComponent.jsx';

export class MLTheoryComponent extends Component {
	render() {
		return (
			<div className="theorie2">
				<div className="container">
					<div className="row">
						<div className="where col-lg-7">
							<MLUsecaseComponent/>
						</div>
						<div className="future col-lg-4">
							<MLFutureOutlookComponent/>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

