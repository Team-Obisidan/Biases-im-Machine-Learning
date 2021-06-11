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
							<li><sup>{i}</sup>&nbsp;{getFootnotes()[i].desc}</li>
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
											<div style={{textAlign: 'left'}}>
												<p>
													KI und Machine Learning hängen zwar eng zusammen, dürfen aber nicht als Synonyme verwendet werden.
													Die Begrifflichkeiten lassen sich dabei wie folgt abgrenzen:
													<ul>
														<li>KI definiert die Herausforderungen und entwickelt die zugehörigen Lösungsansätze.</li>
														<li>Machine Learning ist eine Methode der KI und zielt darauf ab, dass Maschinen automatisiert sinnvolle Ergebnisse liefern, ohne dass der Lösungsweg bzw. die Lösung explizit programmiert ist.</li>
														<li>Algorithmen lernen aus vorliegenden Testdaten Modelle, die auf weitere (neue) Daten angewendet werden können.<Footnote i={1} desc="Vgl. Kersting/Tresp 2018, S. 1"/></li>
													</ul>
												</p>

												<YouTubeExpandable/>
												<p>
													Machine Learning ist demnach ein wichtiges Teilgebiet der KI und beschreibt wie Maschinen das Lernen lernen.<Footnote i={2} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 370"/>
													Machine Learning umfasst im Allgemeinen Methoden, die mithilfe von Lernprozessen Zusammenhänge in bestehenden Datensätzen erkennen.
													Auf diesen Zusammenhängen basierend werden dann Vorhersagen getroffen.<Footnote i={3} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 370"/>
													Dabei lernt das Modell über Algorithmen „selbst“ und kann auf Basis existierender Daten Rückschlüsse ziehen, ohne dass diese Rückschlüsse genau programmiert sind.
													Die Grundlage für das maschinelle Lernen stellen demnach Algorithmen und Trainingsdaten dar.<Footnote i={4} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 371"/>
												</p>

												{this.getFooter(getFootnotes)}
											</div>
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
											<div style={{textAlign: 'left'}}>
												<p>
													Bias bedeutet übersetzt so viel wie Vorurteile, Verzerrungen oder Voreingenommenheit.
													Bias im Machine Learining steht meist im Kontext zu Verzerrungen oder Voreingenommenheit.
													Anwendungen, bei denen Machine Learning angewendet werden, haben oftmals eine große gesellschaftliche Reich- oder Tragweite.
													Umso wichtiger ist es, dass die Anwendung von Verfahren des Machine Learning auf Verzerrungen oder Voreingenommenheit überprüft werden.<Footnote i={1} desc="Vgl. Hagendorff 2019, S. 54"/>
												</p>

												<YouTubeExpandable/>
												<p>
													Die Voreingenommenheit besagt die unterschiedlichen Schlüsse, die wir je nach unseren Erfahrungen ziehen.
													Die Verzerrung beschreibt im statistischen Sinne die mittlere systematische Abweichung zwischen dem erwarteten („richtigen“) Modellergebnis und dem mittleren wirklich eingetretenen Modellergebnis.<Footnote i={2} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 3 ff."/>
													Oftmals ergeben sich schlechte Ergebnisse durch schlechte Eingangsdaten (garbage in garbage out).
												</p>
												<p>
													Dies ist allerdings nicht der einzige Grund. Die Folge der Bias sind Fehler in den Ergebnissen der KI, durch bspw. diskriminierende Strukturen.<Footnote i={3} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={4} desc="Vgl. Kagian/Dror/Leyvand/Meilijson/Cohen-Or/Ruppin, S. 235 ff."/>
													Es gibt viele verschiedene Arten von Bias. Beispiele hierfür sind; Representation Bias, Measurement Bias, Aggregation Bias, Deployment Bias und Historical Bias.<Footnote i={5} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>
												</p>
												<p>Bei dem Representation Bias ist immer ein bestimmter Teil des Eingaberaums unterrepräsentiert.<Footnote i={6} desc="Vgl. Suresh/Guttag 2020, S. 2 f."/>

													Wenn eine Gruppe eine Minderheit mit nur bspw. 5 % der Verteilung ausmacht, dann führt das Sampling aus der Datenverteilung wahrscheinlich zu einem weniger funktionierenden Modell für diese Gruppe.
													Ein Beispiel aus der Praxis, welches leider immer wieder auftritt ist, dass farbige Personen seltener bei Testdaten verwendet werden und so auch seltener auf Bilderkennungsprogram identifiziert werden können.<Footnote i={7} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={8} desc="Vgl. Suresh/Guttag 2020, S. 5"/>
												</p>
												<p>
													Beim Measurement Bias führt falsches kategorisieren dazu, dass die Ergebnisse bzw. die Testdaten falsch sind und infolgedessen die KI auch falsche Ergebnisse ausgibt.
													Diese Messverzerrung kann bei der Auswahl, Sammlung oder Berechnung von Merkmalen und Labels auftreten.<Footnote i={9} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={10} desc="Vgl. Suresh/Guttag 2020, S. 5 f."/>
												</p>
												<p>
													Aggregation Bias beschreibt das Phänomen, dass ein Modell nicht für die Problemlösung nicht ausreicht.
													Diese Verzerrung entsteht durch Verwendung eines Einheitsmodell für Gruppen mit unterschiedlichen bedingten Verteilungen.<Footnote i={11} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>
													Bspw. ist bekannt, dass Diabetes-Patienten je nach ethnischer Zugehörigkeit unterschiedliche Komplikationen aufweisen.
													Da diese Faktoren innerhalb verschiedener Subpopulationen unterschiedliche Bedeutungen haben, ist es unwahrscheinlich, dass ein einziges Modell zur Vorhersage von Komplikationen für jede Gruppe in der Population ausreichend ist, selbst wenn sie in den Trainingsdaten gleichermaßen vertreten sind.<Footnote i={12} desc="Vgl. Suresh/Guttag 2020, S. 6"/>
												</p>
												<p>
													Deployment Biases entstehen, wenn Diskrepanzen zwischen der Problemlösung eines Modells und der Art und Weise, wie das Modell tatsächlich verwendet wird, auftreten.<Footnote i={13} desc="Vgl. Suresh/Guttag 2020, S. 2 ff."/>
													Ein Modell wird quasi für Fall X gebaut, wird dann aber für Fall Y verwendet.
													Da das Modell dafür nicht erstellt wurde, gibt es keine Garantie dafür, dass eine gute Evaluationsleistung von Anwendungsfall zu Anwendungsfall übertragen wird.
												</p>
												<p>
													Bspw. werden Risikobewertungstools, welche die Wahrscheinlichkeit berechnen/schätzen, dass eine Person auf eine bestimmte Art handelt, zweckentfremdet.
													Dabei werden diese Tools womöglich sogar verwendet, um die Länge einer Strafe zu bestimmen.
													Die Folge sind versicherungsmathematische Strafzumessungen, die eine erhöhte Inhaftierungen auf Grund persönlicher Merkmale ergeben.
													So bekommen farbige Personen häufig eine längere Haftstrafe.<Footnote i={14} desc="Vgl. Suresh/Guttag 2020, S. 6 ff."/>
												</p>
												<p>
													Historical Bias treten selbst bei perfekt gemessenen und gelabelten Daten auf.
													Diese Verzerrung entsteht, wenn Geschehnisse auf der Welt ein Modell dazu bringen, Ergebnisse zu produzieren, diese Ergebnisse jedoch nicht erwünscht sind.<Footnote i={15} desc="Vgl. Suresh/Guttag 2020, S. 2 f."/>
													Bspw. ergeben Testdaten, dass nur 28,4 % der Frauen Führungskräfte besetzen.
													Infolgedessen schlägt die KI Frauen weniger „gute“ Stellen vor. Frauen werden demnach benachteiligt, obwohl die Testdaten keinen Fehler als solchen haben, sondern die historische Realität widerspiegeln.<Footnote i={15} desc="Vgl. Suresh/Guttag 2020, S. 4 f."/><sup>,</sup><Footnote i={16} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>
												</p>
												{this.getFooter(getFootnotes)}
											</div>
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
											<div style={{textAlign: 'left'}}>
												<p>
													Eine Gesellschaft beschreibt Personen oder Lebende, die räumlich gemeinsam leben bzw. vorübergehend innerhalb einer Räumlichkeit vereint sind.
													Die Komplexität des Begriffes lässt sich nach dieser Definition schon erahnen.<Footnote i={1} desc="Vgl. Schäfers 2018, S. 141"/>
													Im heutigen Verständnis sprechen wir bei einer Gesellschaft von menschlichem Zusammenleben.<Footnote i={2} desc="Vgl. Schäfers 2018, S. 141 "/>
												</p>

												<YouTubeExpandable/>
												<p>
													Tatsächlich ist der Begriff der Gesellschaft in der Soziologie sehr umstritten.
													Bspw. schrieb Warnfried Dettling, ein deutscher Politologe und Publizist, dass es die Gesellschaft nicht mehr gebe, sondern nur noch individuelle Personen, <span className="font-italic">&bdquo;die sich nicht länger in alten Formationen bewegen&ldquo;</span>.<Footnote i={3} desc="Vgl. Krossa 2018, S. 1"/><sup>,</sup><Footnote i={4} desc="Kneer 1997, S. 7"/>
												</p>
												<p>Die Begriffsdefinition der Gesellschaft ist deshalb so komplex, da die Menschen sehr unterschiedlich sind.
													Fundamentale Dynamiken treffen in dem menschlichen Bestehen zusammen:<Footnote i={5} desc="Vgl. Krossa 2018, S. 9 f."/> <span className="font-italic">&bdquo;die</span> [Dynamiken] <span className="font-italic">zwischen Kollektiven und Individuen, zwischen dem Universalen und dem Partikularen, zwischen Übereinstimmung und Unterschiedlichkeit&ldquo;</span>.<Footnote i={6} desc="Krossa 2018. S. 9"/>
												</p>

												{this.getFooter(getFootnotes)}
											</div>
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

