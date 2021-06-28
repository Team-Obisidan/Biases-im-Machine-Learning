import {Footnotes} from '@team-obisidan/react-footnotes';
import {getFooter} from 'components/GetFooter.jsx';
import React, {Component} from 'react';
import {TextExpandable} from '../expandables/TextExpandable.jsx';

export class IndustrialComponent extends Component {
	render() {
		return (
			<TextExpandable title="Industriell" length="250">
				<Footnotes>
					{({Footnote, getFootnotes}) => (
						<div style={{textAlign: 'left'}}>

							<p>
								Künstliche Intelligenz ist ein schnellwachsender Geschäftsbereich innerhalb der Industrie.
								Fehlende Regularien, bzw. Gesetze und das Recht am geistigen Eigentum machen die Überwachung von Black-Box-Algorithmen zunehmend schwieriger.
								<br/>
								Für Außenstehende ist dabei nicht nachzuvollziehen, wie solche Algorithmen funktionieren und eine Überwachung, bzw. Nachvollziehbarkeit der erzielten Ergebnisse ist nicht gegeben.
								KI-Systeme befinden sich innerhalb einer schnelllebigen Branche, in der festgesetzte Markt Priorisierungen dominieren. Die Umsetzung der Ethik in solchen KI-Systemen ist schwierig zu implementieren und sehr zeitintensiv.
								<br/>
								Dadurch werden solche Prinzipien oft nicht berücksichtigt und Rückrufaktionen bei aufkommenden Problemen werden in Kauf genommen, um dann z.B. solche Probleme zu lösen. Die Schaffung von globalen Standards bei der Überwachung, bzw. Erstellung solcher Systeme kann bei jenen Problemen entgegenwirken.
								Der Fortschritt in diesem Bereich ist derzeit jedoch als sehr langsam zu betrachten. Für die Mitigation von Biases muss zudem gegeben sein, dass ein Algorithmus Ergebnisse nicht nur binär klassifiziert.
								<br/>
								So muss bspw. bei der Bestimmung eines Geschlechts berücksichtigt werden, dass es neben männlichen und weiblichen Klassifikationen, also einer typisch binären Klassifikation von 0 und 1, weitere Möglichkeiten geben muss.<Footnote i={1} desc="Vgl. Smith/Rustagi 2020, S. 42"/>
							</p>

							{getFooter(getFootnotes, 'MLBereiche')}
						</div>
					)}
				</Footnotes>
			</TextExpandable>
		);
	}
}
