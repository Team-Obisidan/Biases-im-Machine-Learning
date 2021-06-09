import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import {Footnotes} from 'react-footnotes';
import {AbstractTextExpandable} from './contents/expandables/AbstractTextExpandable.jsx';
import {YouTubeExpandable} from './contents/expandables/YouTubeExpandable.jsx';
export class FeatureComponent extends Component {
	getFooter(getFootnotes) {
		return (
			<><hr/>
				<ol style={{listStyleType: 'none'}}>
					{Object.keys(getFootnotes()).map(i => {
						return (
							<li><sup>{i}</sup>{getFootnotes()[i].desc}</li>
						);
					})}
				</ol>
			</>
		);
	}

	render() {
		return (
			<div className="theorie">
				<div className="container">
					<div className="row">
						<div className="th-topic col-lg-4">
							<h2>ML</h2>

							<div className="th-kreis1 useme">

								<AbstractTextExpandable title="ML" length="900" iconColor="#FFA726">
									<span className="white-span">
										<FontAwesomeIcon icon={faYoutube} size="5x"/>
									</span>
									<p className="white-span">
										Machine Learning ist ein wichtiges Teilgebiet der AI und beschreibt wie Maschinen das Lernen lernen.
									</p>

									<Footnotes>
										{({Footnote, getFootnotes}) => (
											<>
												KI und Machine Learning hängen zwar eng zusammen, dürfen aber nicht als Synonyme verwendet werden.
												Die Begrifflichkeiten lassen sich dabei wie folgt abgrenzen:
												KI definiert die Herausforderungen und entwickelt die zugehörigen Lösungsansätze.
												Machine Learning ist eine Methode der KI und zielt darauf ab, dass Maschinen automatisiert sinnvolle Ergebnisse liefern, ohne dass der Lösungsweg bzw. die Lösung explizit programmiert ist.
												Algorithmen lernen aus vorliegenden Testdaten Modelle, die auf weitere (neue) Daten angewendet werden können.<Footnote i={1} desc="Vgl. Kersting/Tresp 2018, S. 1"/>
												<YouTubeExpandable/>
												Machine Learning ist demnach ein wichtiges Teilgebiet der KI und beschreibt wie Maschinen das Lernen lernen.<Footnote i={2} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 370"/>
												Machine Learning umfasst im Allgemeinen Methoden, die mithilfe von Lernprozessen Zusammenhänge in bestehenden Datensätzen erkennen.
												Auf diesen Zusammenhängen basierend werden dann Vorhersagen getroffen.<Footnote i={3} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 370"/>
												Dabei lernt das Modell über Algorithmen „selbst“ und kann auf Basis existierender Daten Rückschlüsse ziehen, ohne dass diese Rückschlüsse genau programmiert sind.
												Die Grundlage für das maschinelle Lernen stellen demnach Algorithmen und Trainingsdaten dar.<Footnote i={4} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 371"/>
												{this.getFooter(getFootnotes)}
											</>
										)}
									</Footnotes>
								</AbstractTextExpandable>

							</div>

						</div>

						<div className="th-topic col-lg-4">
							<h2>Biases</h2>
							<div className="th-kreis2 useme">
								<AbstractTextExpandable title="Biases" length="900" iconColor="#00766C">
									<span className="white-span">
										<FontAwesomeIcon icon={faYoutube} size="5x"/>
									</span>
									<p className="white-span">
										Biases bedeutet übersetzt so viel wie Verzerrungen, Voreingenommenheit oder Vorurteile. Doch was hat das mit ML zu tun?
									</p>

									<Footnotes>
										{({Footnote, getFootnotes}) => (
											<>
												Bias bedeutet übersetzt so viel wie Vorurteile, Verzerrungen oder Voreingenommenheit.
												Bias im Machine Learining steht meist im Kontext zu Verzerrungen oder Voreingenommenheit.
												Anwendungen, bei denen Machine Learning angewendet werden, haben oftmals eine große gesellschaftliche Reich- oder Tragweite.
												Umso wichtiger ist es, dass die Anwendung von Verfahren des Machine Learning auf Verzerrungen oder Voreingenommenheit überprüft werden.<Footnote i={1} desc="Vgl. Hagendorff 2019, S. 54"/>
												<YouTubeExpandable/>
												Die Voreingenommenheit besagt die unterschiedlichen Schlüsse, die wir je nach unseren Erfahrungen ziehen.
												Die Verzerrung beschreibt im statistischen Sinne die mittlere systematische Abweichung zwischen dem erwarteten („richtigen“) Modellergebnis und dem mittleren wirklich eingetretenen Modellergebnis.<Footnote i={2} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 3 ff."/>
												Oftmals ergeben sich schlechte Ergebnisse durch schlechte Eingangsdaten (garbage in garbage out).
												Dies ist allerdings nicht der einzige Grund. Die Folge der Bias sind Fehler in den Ergebnissen der KI, durch bspw. diskriminierende Strukturen.<Footnote i={3} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={4} desc="Vgl. Kagian/Dror/Leyvand/Meilijson/Cohen-Or/Ruppin, S. 235 ff."/>
												Es gibt viele verschiedene Arten von Bias. Beispiele hierfür sind; Representation Bias, Measurment Bias, Aggregation Bias, Deplyment Bias und Historical Bias.<Footnote i={5} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>

												{this.getFooter(getFootnotes)}
											</>
										)}
									</Footnotes>
								</AbstractTextExpandable>
							</div>
						</div>
						<div className="th-topic col-lg-4">
							<h2>Gesellschaft</h2>
							<div className="th-kreis3 useme">
								<AbstractTextExpandable title="Gesellschaft" length="900" iconColor="#790E8B">
									<span className="white-span">
										<FontAwesomeIcon icon={faYoutube} size="5x"/>
									</span>
									<p className="white-span">
										Eine Gesellschaft beschreibt vorübergehend vereint lebender bzw. vorübergehend auf einem Raum vereinte Personen.
									</p>

									<Footnotes>
										{({Footnote, getFootnotes}) => (
											<>
												Eine Gesellschaft beschreibt Personen oder Lebende, die räumlich gemeinsam leben bzw. vorübergehend innerhalb einer Räumlichkeit vereint sind.
												Die Komplexität des Begriffes lässt sich nach dieser Definition schon erahnen.<Footnote i={1} desc="Vgl. Schäfers 2018, S. 141"/>
												Im heutigen Verständnis sprechen wir bei einer Gesellschaft von menschlichem Zusammenleben.<Footnote i={2} desc="Vgl. Schäfers 2018, S. 141 "/>
												<YouTubeExpandable/>
												Tatsächlich ist der Begriff der Gesellschaft in der Soziologie sehr umstritten.
												Bspw. schrieb Warnfried Dettling, ein deutscher Politologe und Publizist, dass es die Gesellschaft nicht mehr gebe, sondern nur noch individuelle Personen, „die sich nicht länger in alten Formationen bewegen“.<Footnote i={3} desc="Vgl. Krossa 2018, S. 1"/><sup>,</sup><Footnote i={4} desc="Kneer 1997, S. 7"/>
												Die Begriffsdefinition der Gesellschaft ist deshalb so komplex, da die Menschen sehr unterschiedlich sind.
												Fundamentale Dynamiken treffen in dem menschlichen Bestehen zusammen:<Footnote i={5} desc="Vgl. Krossa 2018, S. 9 f."/> „die zwischen Kollektiven und Individuen, zwischen dem Universalen und dem Partikularen, zwischen Übereinstimmung und Unterschiedlichkeit“.<Footnote i={6} desc="Krossa 2018. S. 9"/>

												{this.getFooter(getFootnotes)}
											</>
										)}
									</Footnotes>
								</AbstractTextExpandable>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

