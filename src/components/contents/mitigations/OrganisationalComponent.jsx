import {Footnotes} from '@team-obisidan/react-footnotes';
import {getFooter} from 'components/GetFooter.jsx';
import React, {Component} from 'react';
import { AbstractTextExpandable } from '../expandables/AbstractTextExpandable.jsx';
import {TextExpandable} from '../expandables/TextExpandable.jsx';

export class OrganisationalComponent extends Component {
	render() {
		return (
			<AbstractTextExpandable title="Organisationell" length="250">
				<h4>Organisationell</h4>
				<>
						<div style={{textAlign: 'left'}}>

							<p>
								Auf der Ebene einer Organisation besteht die Herausforderung der Mitigation von Biases darin, wie Teams und Organisationen zusammenarbeiten und aufgebaut sind. [...]
								<br/>
								<br/>

							</p>
						</div>
					
				</>
				<Footnotes>
					{({Footnote, getFootnotes}) => (
						<div style={{textAlign: 'left'}}>

							<p>
								Auf der Ebene einer Organisation besteht die Herausforderung der Mitigation von Biases darin, wie Teams und Organisationen zusammenarbeiten und aufgebaut sind. Fehlende Diversität in Teams, insbesondere innerhalb von technisch geprägten Organisationen, die meist aus weißen männlichen Personen bestehenden und wohlhabend sind, stellen einen Grund für Biases dar.
								Eine Mitigation von Biases kann hier dadurch erreicht werden, dass solche Teams zunehmend diversifiziert werden. Silo-Denken und eine beschränkte Handlungskompetenz Einzelner bestärkt dieses Phänomen weiter, da die so z.B. die Meinung einzelner Personen zu Ungleichheiten oder Problemen von KI-Systemen nicht berücksichtigt werden.<Footnote i={1} desc="Vgl. Smith/Rustagi 2020, S. 40 f."/>
								<br/>
								<br/>
								Ein Mangel an sozialwissenschaftlichem Wissen in solchen Teams, die Algorithmen erstellen und Fachrichtungen meist auf Mathematik, Informatik, Naturwissenschaft und Technik (MINT) basieren, führt zu einer weiteren Stärkung aufkommender Biases.
								Sogenannte „Unknown Unkonws“ – also unbekannte Unbekannten, machen die Mitigation von Biases zudem schwierig. So können Auswirkungen durch unbekannte Parameter bei der Konzeptionierung von Algorithmen zu Fehlern führen.
								Solche Unbekannten müssen durch das Testen von Algorithmen mitigiert werden.
								<br/>
								Ein weiteres Problem ist, dass die Mitigation von Biases noch immer oft als technisches Problem, bzw. technische Lösung von Problemen angesehen wird.
								<br/>
								Als letzter Punkt spielt die Frage der Verantwortlichkeit bei der Mitigation von Biases innerhalb von Organisationen eine Rolle. Wenn ein großes Team, bzw. zusätzlich Drittanbieter an einem Algorithmus arbeiten, werden die Verantwortlichkeiten für entstehende Biases undurchsichtig und das Problem des Black-Box-Algorithmus tritt auf.
								Dabei muss verstanden werden, wer für bestimmte Biases verantwortlich ist, um diese anschließend mitigieren zu können.<Footnote i={2} desc="Vgl. Smith/Rustagi 2020, S. 40 f."/>

							</p>

							{getFooter(getFootnotes, 'MLBereiche')}
						</div>
					)}
				</Footnotes>
			</AbstractTextExpandable>
		);
	}
}
