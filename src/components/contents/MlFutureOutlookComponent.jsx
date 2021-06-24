import React, {Component, Fragment} from 'react';
import {TextExpandable} from './expandables/TextExpandable.jsx';
export class MLFutureOutlookComponent extends Component {
	render() {
		return (
			<>
				<div className="überschrift shadow-sm">
					<h2>ML in der Zukunft</h2>
				</div>

				<div className="inhalt3 shadow-sm">

					<TextExpandable title="Anwendungsszenarien" length="900"/>
				</div>
			</>
		);
	}
}
