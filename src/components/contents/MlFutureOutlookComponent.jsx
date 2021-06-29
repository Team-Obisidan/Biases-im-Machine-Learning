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
										Während der Einsatz von Machine Learning bereits in she viele Gebiete der Wirtschaft, der Gesellschaft und der öffentlichen Verwaltung Einzug hält,
										wird in der Zukunft vor allem zu sehen sein wie diese Systeme auf größerer Skala eingesetzt werden sollen [...] <Footnote i={1} desc="Vgl. Benrath u.a.(2018)"/>
									</p>
									{getFooter(getFootnotes, 'FurtherLearning')}
								</div>
							)}
						</Footnotes>

						<Footnotes>
							{({Footnote, getFootnotes}) => (
								<div style={{textAlign: 'left'}}>
									<p>
										Während der Einsatz von Machine Learning bereits in sehr viele Gebiete der Wirtschaft, der Gesellschaft und der öffentlichen Verwaltung Einzug hält, wird in der Zukunft vor allem zu sehen sein wie diese Systeme auf größerer Skala eingesetzt werden sollen.
										<br/>
										<br/>
										Ein Beispiel ist das Social Credit-System in China. Dieses System zu Bewertung jedes einzelnen Bürgers anhand seines Verhaltens ist bisher nur in einzelnen Städten und Regionen der Volksrepublik eingeführt worden, soll aber zukünftig für ganz China eingesetzt werden.
										<br/>
										Das System sieht es vor Bürgern für gute Taten, Ehrenämter und Pro-Regierungspolitik den BürgerInnen Punkte auf Ihrem Konto gutzuschreiben, während der Gang über eine rote Ampel, illegale Aktionen, sowie Contra-Regierungspolitisches Verhalten mit Punktabzug bestraft werden.
										<br/>
										Mithilfe von Machine Learning in Form einer Künstlichen Intelligenz soll die Verwaltung und Vergabe dieser Punkte vorgenommen werden, da der manuelle Vorgang zeitlich nicht stemmbar ist.
										<br/>
										<br/>
										Weiter werden in der Medizin Machine Learning Algorithmen immer stärker und großflächiger eingebunden. Es sind längst keine Pilotprojekte mehr, die sich Machine Learning zunutze machen um komplexe medizinische Befunde zu erstellen und Entscheidungen über die Behandlung eines Patienten zu treffen.<Footnote i={1} desc="Vgl. Benrath u.a.(2018)"/>
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
