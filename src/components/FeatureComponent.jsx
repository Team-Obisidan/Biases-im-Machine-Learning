import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import {Footnotes} from '@team-obisidan/react-footnotes';
import {AbstractTextExpandable} from './contents/expandables/AbstractTextExpandable.jsx';
import {YouTubeExpandable} from './contents/expandables/YouTubeExpandable.jsx';
import {getFooter} from './GetFooter.jsx';

export class FeatureComponent extends Component {
	render() {
		return (
			<div className="theorie">
				<div className="container">
					<div className="row">
						<div className="theo-box">
							<div className="row">
								<div className="th-topic col-lg-4">
									<h2 style={{textShadow: '1px 2px rgba(0, 0, 0, 0.175)'}}>ML</h2>

									<div className="th-kreis1 useme shadow">

										<AbstractTextExpandable title="ML" length="900" iconColor="#c63f17">
											<span className="white-span">
												<FontAwesomeIcon icon={faYoutube} size="5x"/>
											</span>
											<p className="white-span">
												Machine Learning ist ein wichtiges Teilgebiet der AI und beschreibt wie Maschinen das Lernen lernen.
											</p>

											<Footnotes>
												{({Footnote, getFootnotes}) => (
													<div style={{textAlign: 'left'}}>

														Durch KI können Maschinen menschliche Fähigkeiten und Verhaltensweisen wie das Wahrnehmen, das Sprachverstehen, Lernen, etc. nachbilden.<Footnote i={1} desc="Vgl. Gentsch 2018, S. 17 f."/>
														{' '}
														Mittels intelligenten Algorithmen, welche Daten analysieren und auswerten, können „selbständige“ Handlungen aus den Analyseergebnissen abgeleitet und durchgeführt werden.<Footnote i={2} desc="Vgl. Gentsch 2018, S. 13"/>
														<br/>
														<br/>
														KI und Machine Learning hängen zwar eng zusammen, dürfen aber nicht als Synonyme verwendet werden.
														Die Begrifflichkeiten lassen sich dabei wie folgt abgrenzen:
														<ul>
															<li>KI definiert die Herausforderungen und entwickelt die zugehörigen Lösungsansätze.</li>
															<li>Machine Learning ist eine Methode der KI und zielt darauf ab, dass Maschinen automatisiert sinnvolle Ergebnisse liefern, ohne dass der Lösungsweg bzw. die Lösung explizit programmiert ist.</li>
															<li>Algorithmen lernen aus vorliegenden Testdaten Modelle, die auf weitere (neue) Daten angewendet werden können.<Footnote i={3} desc="Vgl. Kersting/Tresp 2018, S. 1"/></li>
														</ul>
														<br/>

														<YouTubeExpandable title="Was ist maschinelles Lernen?" slug="KcnzihaSxgg"/>
														<p>
															Machine Learning ist demnach ein wichtiges Teilgebiet der KI und beschreibt wie Maschinen das Lernen lernen.<Footnote i={4} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 370"/>
															{' '}
															Machine Learning umfasst im Allgemeinen Methoden, die mithilfe von Lernprozessen Zusammenhänge in bestehenden Datensätzen erkennen.
															Auf diesen Zusammenhängen basierend werden dann Vorhersagen getroffen.<Footnote i={5} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 370"/>
															{' '}
															Dabei lernt das Modell über Algorithmen „selbst“ und kann auf Basis existierender Daten Rückschlüsse ziehen, ohne dass diese Rückschlüsse genau programmiert sind.
															Die Grundlage für das maschinelle Lernen stellen demnach Algorithmen und Trainingsdaten dar.<Footnote i={6} desc="Vgl. Welsch/Eitle/Buxmann 2018, S. 371"/>
															<br/>
															Die Algorithmen, welche in ML verwendet werden, lassen sich in drei Kategorien einteilen: Supervised Learning, Unsupervised Learning und Reinforcement Learning.<Footnote i={7} desc="Vgl. Weber 2020, S. 39"/>
														</p>

														{getFooter(getFootnotes, 'WasIstML')}
													</div>
												)}
											</Footnotes>
										</AbstractTextExpandable>

									</div>

								</div>

								<div className="th-topic col-lg-4">
									<h2 style={{textShadow: '1px 3px rgba(0, 0, 0, 0.175)'}}>Biases</h2>
									<div className="th-kreis2 useme shadow-lg">
										<AbstractTextExpandable title="Biases" length="900" iconColor="#00766C">
											<span className="white-span">
												<FontAwesomeIcon icon={faYoutube} size="5x"/>
											</span>
											<p className="white-span">
												&bdquo;Bias&ldquo; bedeutet übersetzt so viel wie Vorurteil, Verzerrung oder Voreingenommenheit. <br/>
												Doch was hat das mit ML zu tun?
											</p>

											<Footnotes>
												{({Footnote, getFootnotes}) => (
													<div style={{textAlign: 'left'}}>
														<p>
															&bdquo;Bias&ldquo; bedeutet übersetzt so viel wie Vorurteil, Verzerrung oder Voreingenommenheit.
															{' '}
															Bias im Machine Learining steht meist im Kontext zu Verzerrungen oder Voreingenommenheit.
															{' '}
															Anwendungen, bei denen Machine Learning angewendet werden, haben oftmals eine große gesellschaftliche Reich- oder Tragweite.
															{' '}
															Umso wichtiger ist es, dass die Anwendung von Verfahren des Machine Learning auf Verzerrungen oder Voreingenommenheit überprüft werden.<Footnote i={1} desc="Vgl. Hagendorff 2019, S. 54"/>
															<br/>
															<br/>
															&bdquo;Erstens ist es möglich, dass die Technikentwickelnden Voreingenommenheiten explizit oder implizit direkt
															in ein Verfahren oder technisches Artefakt einbauen. Zweitens kann es passieren, dass sich Wertannahmen nicht intendiert in Verfahren oder Artefakte einschreiben,
															etwa, wenn bei lernenden Verfahren Trainingsdaten verwendet werden, in denen gesellschaftliche Ungleichbehandlungen abgebildet sind.
															Das System lernt diese Ungleichbehandlungen und setzt sie (oftmals in gesteigerter
															Größenordnung) fort.&ldquo;<Footnote i={2} desc="Kolleck/Orwat 2020, S. 32"/>
															<br/>
															<br/>
															Dabei wird sich hier vorallem auf die gesellschaftlichen Biases beschränkt.

														</p>

														<YouTubeExpandable slug="qEAYDe06bE4" title="Biases im Machine Learning"/>
														<p>
															Die Voreingenommenheit besagt die unterschiedlichen Schlüsse, die wir je nach unseren Erfahrungen ziehen.
															{' '}
															Die Verzerrung beschreibt im statistischen Sinne die mittlere systematische Abweichung zwischen dem erwarteten („richtigen“) Modellergebnis und dem mittleren wirklich eingetretenen Modellergebnis.<Footnote i={3} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 3 ff."/>
															{' '}
															Oftmals ergeben sich schlechte Ergebnisse durch schlechte Eingangsdaten (garbage in garbage out).
															{' '}
														</p>
														<p>
															Dies ist allerdings nicht der einzige Grund. Die Folge der Bias sind Fehler in den Ergebnissen der KI, durch bspw. diskriminierende Strukturen.<Footnote i={4} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={5} desc="Vgl. Kagian/Dror/Leyvand/Meilijson/Cohen-Or/Ruppin, S. 235 ff."/>
															{' '}
															Es gibt viele verschiedene Arten von Bias. Beispiele hierfür sind: <span className="font-weight-bold">Representation Bias</span>, <span className="font-weight-bold">Measurement Bias</span>, <span className="font-weight-bold">Aggregation Bias</span>, <span className="font-weight-bold">Deployment Bias</span> und <span className="font-weight-bold">Historical Bias</span>.<Footnote i={6} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>
															{' '}
														</p>
														<p>
															Bei dem <span className="font-weight-bold">Representation Bias</span> ist immer ein bestimmter Teil des Eingaberaums unterrepräsentiert.<Footnote i={7} desc="Vgl. Suresh/Guttag 2020, S. 2 f."/>
															{' '}
															Wenn eine Gruppe eine Minderheit mit nur bspw. 5 % der Verteilung ausmacht, dann führt das Sampling aus der Datenverteilung wahrscheinlich zu einem weniger funktionierenden Modell für diese Gruppe.
															{' '}
															Ein Beispiel aus der Praxis, welches leider immer wieder auftritt ist, dass farbige Personen seltener bei Testdaten verwendet werden und so auch seltener auf Bilderkennungsprogram identifiziert werden können.<Footnote i={8} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={9} desc="Vgl. Suresh/Guttag 2020, S. 5"/>
															{' '}
														</p>
														<p>
															Beim <span className="font-weight-bold">Measurement Bias</span> führt falsches kategorisieren dazu, dass die Ergebnisse bzw. die Testdaten falsch sind und infolgedessen die KI auch falsche Ergebnisse ausgibt.
															{' '}
															Diese Messverzerrung kann bei der Auswahl, Sammlung oder Berechnung von Merkmalen und Labels auftreten.<Footnote i={10} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/><sup>,</sup><Footnote i={11} desc="Vgl. Suresh/Guttag 2020, S. 5 f."/>
															{' '}
														</p>
														<p>
															<span className="font-weight-bold">Aggregation Bias</span> beschreibt das Phänomen, dass ein Modell nicht für die Problemlösung nicht ausreicht.
															{' '}
															Diese Verzerrung entsteht durch Verwendung eines Einheitsmodell für Gruppen mit unterschiedlichen bedingten Verteilungen.<Footnote i={12} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>
															{' '}
															Bspw. ist bekannt, dass Diabetes-Patienten je nach ethnischer Zugehörigkeit unterschiedliche Komplikationen aufweisen.
															{' '}
															Da diese Faktoren innerhalb verschiedener Subpopulationen unterschiedliche Bedeutungen haben, ist es unwahrscheinlich, dass ein einziges Modell zur Vorhersage von Komplikationen für jede Gruppe in der Population ausreichend ist, selbst wenn sie in den Trainingsdaten gleichermaßen vertreten sind.<Footnote i={13} desc="Vgl. Suresh/Guttag 2020, S. 6"/>
														</p>
														<p>
															<span className="font-weight-bold">Deployment Biases</span> entstehen, wenn Diskrepanzen zwischen der Problemlösung eines Modells und der Art und Weise, wie das Modell tatsächlich verwendet wird, auftreten.<Footnote i={14} desc="Vgl. Suresh/Guttag 2020, S. 2 ff."/> <br/>
															Ein Modell wird quasi für Fall X gebaut, wird dann aber für Fall Y verwendet.
															{' '}
															Da das Modell dafür nicht erstellt wurde, gibt es keine Garantie, dass eine gute Evaluationsleistung von Anwendungsfall zu Anwendungsfall übertragen wird. <br/>
															{' '}
															Bspw. werden Risikobewertungstools, welche die Wahrscheinlichkeit berechnen/schätzen, dass eine Person auf eine bestimmte Art handelt, zweckentfremdet.
															{' '}
															Dabei werden diese Tools womöglich sogar verwendet, um die Länge einer Strafe zu bestimmen.
															{' '}
															Die Folge sind versicherungsmathematische Strafzumessungen, die eine erhöhte Inhaftierungen auf Grund persönlicher Merkmale ergeben.
															{' '}
															So bekommen farbige Personen häufig eine längere Haftstrafe.<Footnote i={15} desc="Vgl. Suresh/Guttag 2020, S. 6 ff."/>
															{' '}
														</p>
														<p>
															<span className="font-weight-bold">Historical Bias</span> treten selbst bei perfekt gemessenen und gelabelten Daten auf.
															{' '}
															Diese Verzerrung entsteht, wenn Geschehnisse auf der Welt ein Modell dazu bringen, Ergebnisse zu produzieren, diese Ergebnisse jedoch nicht erwünscht sind.<Footnote i={16} desc="Vgl. Suresh/Guttag 2020, S. 2 f."/>
															{' '}
															Bspw. ergeben Testdaten, dass nur 28,4 % der Frauen Führungskräfte besetzen.
															{' '}
															Infolgedessen schlägt die KI Frauen weniger „gute“ Stellen vor. Frauen werden demnach benachteiligt, obwohl die Testdaten keinen Fehler als solchen haben, sondern die historische Realität widerspiegeln.<Footnote i={17} desc="Vgl. Suresh/Guttag 2020, S. 4 f."/><sup>,</sup><Footnote i={18} desc="Vgl. Mehrabi/Morstatter/Saxena/Lerman/Galstyan 2019, S. 4 ff."/>
															{' '}
														</p>
														{getFooter(getFootnotes, 'Biases')}
													</div>
												)}
											</Footnotes>
										</AbstractTextExpandable>
									</div>
								</div>
								<div className="th-topic col-lg-4">
									<h2 style={{textShadow: '1px 2px rgba(0, 0, 0, 0.175)'}}>Gesellschaft</h2>
									<div className="th-kreis3 useme shadow">
										<AbstractTextExpandable title="Gesellschaft" length="900" iconColor="#790E8B">
											<span className="white-span">
												<FontAwesomeIcon icon={faYoutube} size="5x"/>
											</span>
											<p className="white-span">
												Eine Gesellschaft beschreibt vorübergehend vereint lebende bzw. vorübergehend auf einem <br/>
												Raum vereinte Personen.
											</p>

											<Footnotes>
												{({Footnote, getFootnotes}) => (
													<div style={{textAlign: 'left'}}>
														<p>
															Eine Gesellschaft beschreibt Personen oder Lebende, die räumlich gemeinsam leben bzw. vorübergehend innerhalb einer Räumlichkeit vereint sind.
															{' '}
															Die Komplexität des Begriffes lässt sich nach dieser Definition schon erahnen.<Footnote i={1} desc="Vgl. Schäfers 2018, S. 141"/>
															{' '}
															Im heutigen Verständnis sprechen wir bei einer Gesellschaft von menschlichem Zusammenleben.<Footnote i={2} desc="Vgl. Schäfers 2018, S. 142 "/>
															{' '}
														</p>

														<YouTubeExpandable slug="1r2ULOzc1zw" title="Gesellschaftliche Herausforderungen - Video"/>
														<p>
															Tatsächlich ist der Begriff der Gesellschaft in der Soziologie sehr umstritten.
															{' '}
															Bspw. schrieb Warnfried Dettling, ein deutscher Politologe und Publizist, dass es die Gesellschaft nicht mehr gebe, sondern nur noch individuelle Personen, <span className="font-italic">&bdquo;die sich nicht länger in alten Formationen bewegen&ldquo;</span>.<Footnote i={3} desc="Vgl. Krossa 2018, S. 1"/><sup>,</sup><Footnote i={4} desc="Kneer 1997, S. 7"/>
															{' '}
														</p>
														<p>
															Die Begriffsdefinition der Gesellschaft ist deshalb so komplex, da die Menschen sehr unterschiedlich sind.
															{' '}
															Fundamentale Dynamiken treffen in dem menschlichen Bestehen zusammen:<Footnote i={5} desc="Vgl. Krossa 2018, S. 9 f."/> <span className="font-italic">&bdquo;die</span> [Dynamiken] <span className="font-italic">zwischen Kollektiven und Individuen, zwischen dem Universalen und dem Partikularen, zwischen Übereinstimmung und Unterschiedlichkeit&ldquo;</span>.<Footnote i={6} desc="Krossa 2018. S. 9"/>
															{' '}
														</p>
														<p>
															Die Schwierigkeiten der Begriffsdefinition spiegeln sich in den realen, gesellschaftlichen Herausforderungen wider.
															Ein großes Thema ist dabei die soziale Ungleichheit. Von sozialer Ungleichheit wird gesprochen, wenn Menschen, welche eine bestimmte Zugehörigkeit zu einer sozialen Kategorie haben, unterschiedliche Zugänge zu sozialen Positionen haben.

															Diese sozialen Positionen wirken sich dabei positiv oder negativ auf die Handlungs- und Lebensbedingungen aus.<Footnote i={7} desc="Vgl. Solga/Powell/Berger 2009, S. 14 f."/>
															{' '}
															Dabei geht es nicht unbedingt um Eigenschaften, die Menschen verschiedenartig machen, wie bspw. Religion, Geschlecht oder Alter, es geht eher um den Zugang zu Ressourcen wie Kapitel, Macht, Bildung oder Einkommen, welche uns „besser“ oder „schlechter“ dastehen lassen.<Footnote i={8} desc="Vgl. Solga/Powell/Berger 2009, S. 14 ff."/>
															<br/>
															Beispiele hierfür sind: <br/> Einkommensungleichheiten aufgrund von dem Geschlecht, Ungleiche Risiken in der Arbeitslosigkeit aufgrund der sozialen Herkunft oder ungleiche Risiken zur Armut und Gesundheit durch den erlernten Beruf oder der Bildung.<Footnote i={9} desc="Vgl. Solga/Powell/Berger 2009, S. 20 ff."/>
														</p>

														<p>
															Eine weitere gesellschaftliche Problematik ist die Diskriminierung.<Footnote i={10} desc="Vgl. Dieckmann 2017, S. 161"/>
															{' '}
															Dabei werden Menschen zu einer homogenen Einheit, durch bestimmte Merkmale wie das Geschlecht oder die Hautfarbe, gruppiert.<Footnote i={11} desc="Vgl. Dieckmann 2017, S. 162 f."/>
															{' '}
															Diskriminierung stellt demnach die Ungleichbehandlung von Menschen dar, welche durch spezifische Merkmale bzw. Zugehörigkeiten dieses Menschen getroffen wird.<Footnote i={12} desc="Vgl. Dieckmann 2017, S. 164 f."/>
															<br/>
															Nach Birgit Rommelspacher kann zwischen drei Ebenen von Diskriminierung unterschieden werden: Individuelle Diskriminierung, Institutionelle Diskriminierung und Strukturelle Diskriminierung:<Footnote i={13} desc="Vgl. Dieckmann 2017, S. 165"/>
															<br/>
														</p>
														<br/>
														<table className="table table-striped">
															<caption style={{textAlign: 'center'}}>Tabelle 1: Ebenen von Diskriminierung<Footnote i={14} desc="Enthalten in: Dieckmann 2017, S. 165"/>   </caption>
															<thead>
																<tr>
																	<th>Diskriminierungsebene</th>
																	<th>Beispiele</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Individuelle Diskriminierung: Menschen werden aufgrund ihrer Merkmale bzw. der Zuschreibung dieses Merkmals von einzelnen Menschen ungleich zu anderen Personen behandelt   </td>
																	<td>Abwehrendes Verhalten,   beleidigende Äußerungen, verächtliche Blicke oder Gewalt   </td>
																</tr>
																<tr>
																	<td>Institutionelle Diskriminierung: Menschen werden durch zugeschriebene Merkmale von Organisationen, Unternehmen oder der Verwaltung ungleich zu anderen Personen behandelt.   </td>
																	<td>Wohnungsabsagen,   Jobabsagen, fehlende Barrierefreiheit beim Bau von Ämtern oder Supermärkten   und Polizeikontrollen   </td>
																</tr>
																<tr>
																	<td>Strukturelle Diskriminierung: Ausgrenzungen   entstehen durch gesellschaftliche Systeme und deren Rechtsvorstellungen sowie   den politischen und ökonomischen Strukturen.   </td>
																	<td>fehlende   Gleichstellung von gesellschaftlichen Minderheiten und Frauen   </td>
																</tr>
															</tbody>
														</table>

														<p>
															<br/>
															Bias im maschinellen Lernen betreffen vor allem die Ebenen der <span className="font-weight-bold">institutionellen</span>  und <span className="font-weight-bold">strukturellen</span> Diskriminierung.
														</p>

														{getFooter(getFootnotes, 'WasistGesellschaft')}
													</div>
												)}
											</Footnotes>
										</AbstractTextExpandable>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

