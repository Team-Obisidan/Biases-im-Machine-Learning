import {Footnotes} from '@team-obisidan/react-footnotes';
import {getFooter} from 'components/GetFooter.jsx';
import React, {Component} from 'react';
import {AbstractTextExpandable} from './expandables/AbstractTextExpandable.jsx';
export class MLFutureOutlookComponent extends Component {
	render() {
		return (
			<>
				<div className="überschrift shadow-sm">
					<h2>ML in der Zukunft</h2>
				</div>

				<div className="inhalt3 shadow-sm overflow-hidden">
					<AbstractTextExpandable title="Anwendungsszenarien">

						<h4>Anwendungsszenarien</h4>
						<Footnotes>
							{({Footnote, getFootnotes}) => (
								<div style={{textAlign: 'left'}}>
									<p>
										1,2, Polizei Benrath u.a.(2018)<Footnote i={1} desc="Vgl. Benrath u.a.(2018)"/>
									</p>
									{getFooter(getFootnotes, 'FurtherLearning')}
								</div>
							)}
						</Footnotes>

						<Footnotes>
							{({Footnote, getFootnotes}) => (
								<div style={{textAlign: 'left'}}>
									<p>
										1,2, Polizei Benrath u.a.(2018)<Footnote i={1} desc="Vgl. Benrath u.a.(2018)"/>
									</p>
									{getFooter(getFootnotes, 'FurtherLearning')}
								</div>
							)}
						</Footnotes>

					</AbstractTextExpandable>
				</div>
			</>
		);
	}
}
