import React, {Component} from 'react';
import {Footnotes} from '@team-obisidan/react-footnotes';
import {getFooter} from 'components/GetFooter.jsx';
import {TextExpandable} from './expandables/TextExpandable.jsx';
import prisoner from './prisoner.jpeg';
import {ReactComponent as RiskWhite} from './risk-scores-white.svg';
import {ReactComponent as RiskBlack} from './risk-scores-black.svg';
import IncomeML from './Income-ML-results.png';
import IncomeSpan from './Income-Span.png';
import {AbstractTextExpandable} from './expandables/AbstractTextExpandable.jsx';

export class MLUsecaseComponent extends Component {
	render() {
		return (
			<>
				<div className="überschrift shadow-sm">
					<h2>Wo wird ML verwendet?</h2>
				</div>
				<div className="inter-lvl">

					<div className="inhalt1 shadow-sm">

						<TextExpandable title="Bereiche" length="1000" iconHtml="🕮" iconColor="black">
							<Footnotes>
								{({Footnote, getFootnotes}) => (
									<div style={{textAlign: 'left'}}>

										<p>
											Machine Learning findet mit den letzten Jahren zunehmend seinen Weg in immer mehr Bereiche der Wirtschaft, der Bildung und der öffentlichen Verwaltung.<Footnote i={1} desc="Vgl. Arora, A. (2018), S. 1"/>
											<br/>
											Die auf Machine Learning basierenden Künstlichen Intelligenzen (KIs) werden hierbei mit dem Ziel eingesetzt präzisere Entscheidungen zu treffen, so wie Personalaufwand zu minimieren.
											{' '}
											Häufig wird hierbei angenommen das die KI den Menschen in vielen Bereichen ersetzen wird, während die Forschung in diesem Bereich davon ausgeht, dass derartige Systeme für lange Zeit lediglich ergänzend zur menschlichen Tätigkeit stattfinden.<Footnote i={2} desc="Vgl. Adorno, M. et al. (2020), S. 67 f."/>
											{' '}
											Während im Bereich der Wirtschaft Machine Learning Prozessunterstützend angewandt wird und damit der Erhöhung der Effizienz dienen soll, gibt es zunehmend gesellschaftliche Bereiche in denen Machine Learning genutzt wird.<Footnote i={3} desc="Vgl. Liu, H.; Gegov, A.; Cocea, M. (2016), S. 588"/>
											<br/>

											Hierbei werden Schwachstellen der KIs hinsichtlich des Umgangs mit Menschen aufgedeckt.
											{' '}
											Einige prominente Fälle, in denen Machine Learning im Umgang mit Menschen versagt werden im nebenstehenden Element erläutert.

										</p>

										{getFooter(getFootnotes, 'MLBereiche')}
									</div>
								)}
							</Footnotes>
						</TextExpandable>
					</div>

					<div className="inhalt2 shadow-sm">

						<AbstractTextExpandable title="Beispiele" iconHtml="🕮" iconColor="black">
							<h4>Beispiele</h4>
							<p>
								Folgende Beispiele werden in diesem Element gezeigt: <br/>
								<br/>
								<p>Amazons Bewerbungstool</p>

								<p>Machine Learning Algorithmus erkennt keine Lebensmittel/Produkte niedriger Einkommensklassen</p>
								<p>Machine Learning System zur Beurteilung der Rückfälligkeit von Sträflingen</p>
							</p>
							<Footnotes>
								{({Footnote, getFootnotes}) => (
									<div style={{textAlign: 'left'}}>

										<p>
											<u>Amazons Bewerbungstool:</u> <br/>
											Amazon selbst entwickelte eine KI, welche automatisch eingehenden Bewerbungen analysiert, um sehr geeignete KandidatInnen herauszufiltern.
											{' '}
											Es stellte sich allerdings heraus, dass die KI sich in ihrem Lernprozess aneignete Männer zu bevorzugen und Frauen auszusortieren.
											{' '}
											Genauer sortierte die KI Bewerbungen in denen das Wort „women“ vorkam direkt aus. Grund hierfür ist Datenbasis, von der die KI lernt.
											{' '}
											Amazon stellte in der Vergangenheit ohnehin vorzugsweise männliche Bewerber ein. Somit ist keine Geschlechts-neutrale Beurteilung der Bewerbungen möglich.<Footnote i={1} desc="Vgl. Oppenheim, M. (2018)."/>

										</p>

										<p>
											<u>Machine Learning Algorithmus erkennt keine Lebensmittel/Produkte niedriger Einkommensklassen:</u> <br/>
											In diesem Fall wird ein Algorithmus zu Erkennung von Objekten verwendet. Dieses Tool soll anhand von Bildern deren Inhalte richtig erkennen.
											{' '}
											Im konkreten Fall wurden Bilder von Lebensmitteln anhand des Tools analysiert, wobei sehr unterschiedliche Ergebnisse auftraten.
											{' '}
											Es wurde festgestellt, das Lebensmittel aus gewissen Regionen für gewisse Einkommensklassen vermehrt falsch zugeordnet wurden.
											{' '}
											Während die Erkennung in Ländern und Regionen mit hohem Einkommen sehr treffsicher war, wurden Lebensmittel in anderen Regionen häufig falsch zugeordnet.<Footnote i={2} desc="Vgl. DeVries, T. et al. (2019), S. 52 f."/>

										</p>
										<div className="container w-100">
											<div className="row">

												<div className="col-md-6 offset-md-3">
													<img src={IncomeML} alt="Prisoner" className="w-100"/>

												</div>
											</div>
											<div className="row">
												<div className="col-md-7 offset-md-3">
													<p className="mt-3">Abbildung 1: Erkannte Objekte der populärsten Algorithmen<Footnote i={3} desc="Entnommen aus: DeVries, T./Misra, I./Wang, C./van der Maaten, L. (2019)"/></p>
												</div>
											</div>
											<br/>
											<div className="row">
												<div className="col-12">
													Das Prinzip ist auch hierbei dasselbe, wie auch bei Amazons Bewerbungstool. Das System lernt von bestehenden Daten.
													{' '}
													Wenn diese Daten verstärkt aus einer ethnischen Gruppe, einer Einkommensklasse oder einem Geschlecht bestehen, wird die KI auch hierfür die besten Ergebnisse liefern.<Footnote i={3} desc="Vgl. Kim, Y.; Huang, J.; Emery, S. (2016), 1-3"/>
												</div>
											</div>

											<div className="row pt-3">

												<div className="col-md-5 offset-md-3">
													<img src={IncomeSpan} alt="Prisoner" className="w-100"/>

												</div>
											</div>
											<div className="row">
												<div className="col-md-8 offset-md-2">
													<p className="mt-3">Abbildung 2: Treffsicherheit des Algorithmus und Einkommenslevel<Footnote i={5} desc="Entnommen aus: DeVries, T./Misra, I./Wang, C./van der Maaten, L. (2019)"/></p>
												</div>
											</div>
										</div>
										<br/>

										<p>
											<u>Machine Learning System zur Beurteilung der Rückfälligkeit von Sträflingen:</u> <br/>
											In den USA wird in einigen Bundesstaaten ein Tool eingesetzt, welches die Rückfälligkeit zu erneuten Straftaten von ehemals Verurteilten StraftäterInnen beurteilen soll.
											{' '}
											Dieses Tool wird zur Risikoeinschätzung genutzt und soll bei der Entscheidung von Richtern über die Freilassung von Häftlingen miteinbezogen werden.
											{' '}
											Zum einen stellte sich bei einer Studie heraus das die Übereinstimmung der KI mit den tatsächlichen Rückfallquoten nur bei 20% liegt.<Footnote i={6} desc="Vgl. Northpoint Inc. (2021)"/>
											{' '}
											Zum anderen und hier liegt das Hauptproblem dieser KI: sie unterscheidet basierend auf ethnischen Merkmalen der StraftäterInnen und schätzt das Risiko für Rückfälligkeit bei People-of-Color grundsätzlich höher ein, als das weißer StraftäterInnen. <Footnote i={7} desc="Vgl. Angwin, J./Larson, J./Kirchner, L./Mattu, S. (2016)"/>
											{' '}

										</p>
										<br/>
										<div className="container w-100">
											<div className="row">

												<div className="col-md-4 offset-md-4">
													<img src={prisoner} alt="Prisoner" className="w-100"/>

												</div>
											</div>
											<div className="row">
												<div className="col-md-10 offset-md-1">
													<p className="mt-3">Abbildung 3: Rückfälligkeits-Bewertung im Vergleich zweier StraftäterInnen<Footnote i={8} desc="Vgl. Angwin, J./Larson, J./Kirchner, L./Mattu, S. (2016)"/></p>
												</div>
											</div>

											<div className="row pt-3">

												<div className="col-md-4 offset-md-4">
													<RiskWhite/>

												</div>
											</div>
											<div className="row">
												<div className="col-md-10 offset-md-1">
													<p className="mt-3">Abbildung 4: Bewertung im Schnitt bei kaukasisch/weißen Personen<Footnote i={9} desc="Vgl. Angwin, J./Larson, J./Kirchner, L./Mattu, S. (2016)"/></p>
												</div>
											</div>

											<div className="row pt-3">

												<div className="col-md-4 offset-md-4">
													<RiskBlack/>

												</div>
											</div>
											<div className="row">
												<div className="col-md-10 offset-md-1">
													<p className="mt-3">Abbildung 5: Bewertung im Schnitt bei maximalpigmentierten Personen<Footnote i={10} desc="Vgl. Angwin, J./Larson, J./Kirchner, L./Mattu, S. (2016)"/></p>
												</div>
											</div>

										</div>

										{getFooter(getFootnotes, 'MLBeispiele')}
									</div>
								)}
							</Footnotes>
						</AbstractTextExpandable>
					</div>

				</div>
			</>

		);
	}
}
