import {Footnotes} from '@team-obisidan/react-footnotes';
import {getFooter} from 'components/GetFooter.jsx';
import React, {Component} from 'react';
import {AbstractTextExpandable} from '../expandables/AbstractTextExpandable.jsx';

export class SocietalComponent extends Component {
	render() {
		return (
			<AbstractTextExpandable title="Gesellschaftlich" length="250">
				<h4>Gesellschaftlich</h4>

				<div style={{textAlign: 'left'}}>

					<p>
						Auf der gesellschaftlichen Ebene müssen bei der Mitigation von Biases historische Ungleichheiten und bestehende Machtdynamiken beachtet werden, die allgegenwärtig in Algorithmen vorhanden sind. [...]
					</p>
				</div>
				<Footnotes>
					{({Footnote, getFootnotes}) => (
						<div style={{textAlign: 'left'}}>

							<p>
								Auf der gesellschaftlichen Ebene müssen bei der Mitigation von Biases historische Ungleichheiten und bestehende Machtdynamiken beachtet werden, die allgegenwärtig in Algorithmen vorhanden sind.
								<br/>
								Eine Diversifizierung der Personen, die innerhalb der MINT-Feldern tätig ist, hilft zudem bei der Mitigation von Biases, bzw. hilft diese präventiv zu vermeiden. Einen weiteren Faktor für die Mitigation von Biases stellt die Modernisierung des Bildungswesens, im Besonderen innerhalb der Daten- und Computerwissenschaften dar.
								<br/>
								<br/>
								Dabei kann der Einsatz von ethischen, sozialwissenschaftlichen und Design Thinking Ansätzen bei der Ausbildung helfen, um KI-Systeme bei der Konzeptionierung und Erstellung auf solche Biases zu sensibilisieren und durch eine Mitigation positiv zu beeinflussen.<Footnote i={1} desc="Vgl. Smith/Rustagi 2020, S. 43"/>

							</p>

							{getFooter(getFootnotes, 'MLBereiche')}
						</div>
					)}
				</Footnotes>
			</AbstractTextExpandable>
		);
	}
}
