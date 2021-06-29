import { Footnotes } from '@team-obisidan/react-footnotes';
import React, { Component } from 'react';
import { AbstractTextExpandable } from './contents/expandables/AbstractTextExpandable.jsx';

import { SourcesComponent } from './contents/SourcesComponent.jsx';

import GPTAssociations from './GPT-3-Associations.png';
import TypeLearning from './TypeLearning.jpeg';
import DrugUsagePredPol from './DrugUsagePredPol.jpg';
import { getFooter } from './GetFooter.jsx';

export class FurtherLearningComponent extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">

					<div className="more col-lg-7">

						<div className="more1">
							<h6>Mehr zu den Themen:</h6>

							<div className="mo-boxen">

								<AbstractTextExpandable className="box1 useme" iconColor="#9CCC65" iconHtml="&#9632;" title="Arten maschinelles Lernen">

									<p>Arten masch. Lernen</p>

									<span />
									<div>
										<Footnotes>
											{({ Footnote, getFootnotes }) => (
												<div style={{ textAlign: 'left' }}>
													<p>
														Die Algorithmen, welche in ML verwendet werden, lassen sich in drei Kategorien einteilen: Supervised Learning, Unsupervised Learning und Reinforcement Learning.<Footnote i={1} desc="Vgl. Weber 2020, S. 39"/>
													</p>
													<div className="container w-100">
															<div className="row">

																<div className="col-md-8 offset-md-2">
																	<img src={TypeLearning} alt="Arten des maschinellen Lernens" className="w-100"/>

																</div>
															</div>
															<div className="row">
																<div className="col-md-9 offset-md-3">
																	<p className="mt-3">Abbildung 1: Verschiede Arten des Maschinellen Lernens<Footnote i={2} desc="Enthalten in: Weber 2020, S. 39"/></p>
																</div>
															</div>
															<br/>

														</div>
													<p>
													Im Supervised Lernen wird über die Vorhersage richtig oder falsch ein Feedback gegeben. Das Unsupervised Lernen hingegen beinhaltet kein Feedback. 
													Hier versucht der Algorithmus Daten auf verbogenen Strukturen basierend zu kategorisieren. 
													Reinforcement Learning ist erstmal ähnlich wie Supervised Learning. Es enthält ebenfalls Feedback. Allerdings zeigt es nicht für jeden Eingang oder Zustand eine Reaktion.<Footnote i={3} desc="Vgl. Weber 2020, S. 39 f."/> 
													</p>
													<p>
													Im Supervised Learning beinhaltet ein Datensatz die gewünschte Ausgabe bzw. Bezeichnung. 
													Die Funktion kann so einen Fehler für eine bestimmte Vorhersagte berechnen. Das Supervising erfolgt, wenn eine Vorhersage gemacht und ein tatsächlicher oder gewünschter Fehler erzeugt wird, um die ursprüngliche Funktion anzupassen und das Lernen zu ermöglichen. 
													Der Datensatz im Unsupervised Learning beinhaltet keine gwünschte Ausgabe, sodass die Funktion nicht „überwacht“ werden kann bzw. es die Möglichkeit überhaupt nicht gibt. 
													<br />
													Die Funktion versucht hingegen den Datensatz zu klassifizieren. Somit soll jede Klasse einen Teil des Datensatzes mit gemeinsamen Merkmalen enthalten. 
													Reinforcement Learning weist ein ähnliches Verhalten, wie das menschliche Lernen auf, da nicht bei jeder Aktion ein Feedback gegeben wird. Der Algorithmus versucht, Aktionen für einen gegebenen Satz von Zuständen zu lernen, die zu einem Zielzustand führen. Dabei wird nicht nach jedem Beispiel ein Fehler ausgegeben (wie beim supervised Learning). 
													Der Fehler wird beim Empfang des Verstärkungssignals ausgegeben. Bspw. wenn der Zielzustand erreicht wird. 
													Es ist deshalb ähnlich zum menschlichen Verhalten, da nicht für alle Aktionen, sondern nur wenn eine Belohnung gerechtfertigt ist, ein Feedback gegeben wird.<Footnote i={4} desc="Vgl. Weber 2020, S. 40 ff."/> 
													</p>
													{getFooter(getFootnotes, 'FurtherLearning')}
												</div>
											)}
										</Footnotes>
									</div>
								</AbstractTextExpandable>

								<a className="text-decoration-none " id="t" href="https://queue.acm.org/detail.cfm?id=3466134" target="_blank" rel="noreferrer">
									<div className="useme">
										<p>Paper ACM - Biases in AI Systems</p>
									</div>
								</a>

								<a className="text-decoration-none" href="https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf" target="_blank" rel="noreferrer">
									<div className="useme">
										<p>PWC Studie zur KI</p>

									</div>
								</a>

								<AbstractTextExpandable className="box2 useme" iconColor="#FFCA28" iconHtml="&#9632;" title="Weitere Beispiele">

									<p>Weitere Beispiele</p>

									<span />
									<div>
										<Footnotes>
											{({ Footnote, getFootnotes }) => (
												<div style={{ textAlign: 'left' }}>
													Im Rahmen eines experimentellen Setups beleuchteten Brown u.a.die Assoziationen des populäre Sprachmodell GPT-3 mit verschiedenen Ethnien.
													Dabei bildet der in Abb.1 gezeigte Sentiment Score die Positivität/Negativität der durch GPT-3 mit den Ethnien assoziierten Wörten ab.<Footnote i={1} desc="Vgl. Brown, T. u.a. (2020)" />
													<div className="container w-100">
														<div className="row">

															<div className="col-md-6 offset-md-3">
																<img src={GPTAssociations} alt="GPT-Assoziationen" className="w-100" />

															</div>
														</div>
														<div className="row">
															<div className="col-md-8 offset-md-2">
																<p className="mt-3">Abbildung 1: Assoziationen von GPT-3 mit unterschiedlichen Ethnien<Footnote i={2} desc="Entnommen aus: Brown, T. u.a. (2020)" /></p>
															</div>
														</div>
														<br />

													</div>

													<p>
														Ein sogenanntes &quot;Predictive Policing&quot; Tool der Polizei von Los Angeles, mit dem Verbrechen vorhergesagt werden sollten, zeigte ebenfalls spezifische Präferenzen, wie aus Abb.2 zu entnehmen.<Footnote i={3} desc="Vgl. Smith IV, J. (2016)" />
														<br />
														<br />
														<div className="container w-100">
															<div className="row">

																<div className="col-md-7 offset-md-3">
																	<img src={DrugUsagePredPol} alt="Drogenkonsum laut PredPol" className="w-100" />

																</div>
															</div>
															<div className="row">
																<div className="col-md-9 offset-md-2">
																	<p className="mt-3">Abbildung 2: Vorhergesagter und tatsächlicher Drogenkonsum nach Ethnie<Footnote i={4} desc="Entnommen aus: Smith IV, J. (2016)" /></p>
																</div>
															</div>
															<br />

														</div>
													</p>

													<p>
														In einer Erhebung zu potentiellen Biases in der Ausspielung von Werbung durch Lambrecht und Tucker entstanden die in Tab. 1 gezeigten Ergebnisse.<Footnote i={5} desc="Vgl. auch im Folgenden Lambrecht, A./Tucker, C. E. (2016)" /> {' '}
														Impressions stehen dabei für die absoluten Anzeigen der Werbung auf der spezifischen Onlineplattform.
														Im Speziellen testeten Lambrecht und Tucker die Ausspielung von geschlechtsneutraler Werbung zu MINT-Berufen.
														Aus Tab.1 geht hervor, dass Frauen weniger oft Werbung für MINT-Berufe angezeigt bekamen.
													</p>
													<table className="table table-striped">
														<caption style={{ textAlign: 'center' }}>Tabelle 1: Absolute Ausspielzahlen der Werbung<Footnote i={6} desc="Mit Änderungen entnommen aus: Lambrecht, A./Tucker, C. E. (2016)" />   </caption>
														<thead>

															<tr>
																<th>Age Group</th>
																<th>Male Impressions</th>
																<th>Female Impressions</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>Age 18-24</td>
																<td>746719</td>
																<td>649590</td>
															</tr>
															<tr>
																<td>Age 25-34</td>
																<td>662996</td>
																<td>495996</td>
															</tr>
															<tr>
																<td>Age 35-44</td>
																<td>412457</td>
																<td>283596</td>
															</tr>
															<tr>
																<td>Age 45-54</td>
																<td>307701</td>
																<td>224809</td>
															</tr>
															<tr>
																<td>Age 55-64</td>
																<td>209608</td>
																<td>176454</td>
															</tr>
															<tr>
																<td>Age 65+</td>
																<td>192317</td>
																<td>153470</td>
															</tr>
															<tr>
																<td>Total</td>
																<td><span className="font-weight-bold">421966</span></td>
																<td><span className="font-weight-bold">330652</span></td>
															</tr>
														</tbody>
													</table>

													<br />
													<br />

													{getFooter(getFootnotes, 'FurtherLearning')}
												</div>
											)}
										</Footnotes>
									</div>
								</AbstractTextExpandable>

							</div>

						</div>

					</div>

					<div className="quellen col-lg-4">
						<SourcesComponent />
					</div>

				</div>
			</div>
		);
	}
}
