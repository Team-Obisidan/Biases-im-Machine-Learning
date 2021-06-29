import {Footnotes} from '@team-obisidan/react-footnotes';
import {getFooter} from 'components/GetFooter.jsx';
import React, {Component} from 'react';
import {AbstractTextExpandable} from '../expandables/AbstractTextExpandable.jsx';

export class MitiBasicsComponent extends Component {
	render() {
		return (
			<AbstractTextExpandable title="Grundlagen der Mitigation von Biases" length="250" className="overflow-hidden">
				<h4>Grundlagen der Mitigation von Biases</h4>
				<Footnotes>
					{({Footnote, getFootnotes}) => (
						<div style={{textAlign: 'left', margin: 0}} className="overflow-hidden">
							<p style={{margin: 0}}>
								Die Mitigation (engl. für Abmilderung) von Biases (engl. für Vorurteile, Voreingenommenheiten, Neigungen) verfolgt das Ziel, innerhalb von Machine Learning Algorithmen Verzerrungen gegenüber unterprivilegierten Gruppen zu entzerren und dabei faire Vorhersagen zu treffen, ohne die Klassifizierungsgenauigkeit und die Performance eines Algorithmus zu beeinflussen.
								Die Mitigation beeinflusst dabei alle Personengruppen, um ein faires Leben miteinander zu ermöglichen. Die Erkennung solcher Biases und die darauffolgende Mitigation ist in vielen Fällen schwer zu identifizieren und zu lösen.<Footnote i={1} desc="Vgl. Bentivegna 2020"/>
								<br/>
								Für ein näheres Verständnis werden im Folgenden grundlegende Konzepte dargestellt, wie Vorurteile innerhalb des Machine Learnings abgemildert werden können.
							</p>
							<hr style={{padding: 0}}/>
							<ol style={{listStyleType: 'none', marginBottom: 0}}>
								{Object.keys(getFootnotes()).map(i => {
									return (
										<li key={'MitiBasics-Fussnote ' + i}><sup>{i}</sup>&nbsp;{getFootnotes()[i].desc}</li>
									);
								})}
							</ol>
						</div>
					)}
				</Footnotes>
				<Footnotes>
					{({Footnote, getFootnotes}) => (
						<div style={{textAlign: 'left'}}>

							<p>
								Die Mitigation (engl. für Abmilderung) von Biases (engl. für Vorurteile, Voreingenommenheiten, Neigungen) verfolgt das Ziel, innerhalb von Machine Learning Algorithmen Verzerrungen gegenüber unterprivilegierten Gruppen zu entzerren und dabei faire Vorhersagen zu treffen, ohne die Klassifizierungsgenauigkeit und die Performance eines Algorithmus zu beeinflussen.
								Die Mitigation beeinflusst dabei alle Personengruppen, um ein faires Leben miteinander zu ermöglichen. Die Erkennung solcher Biases und die darauffolgende Mitigation ist in vielen Fällen schwer zu identifizieren und zu lösen.<Footnote i={1} desc="Vgl. Bentivegna 2020"/>
								<br/>
								<br/>
								Für ein näheres Verständnis werden im Folgenden grundlegende Konzepte dargestellt, wie Vorurteile innerhalb des Machine Learnings abgemildert werden können. Dabei soll betrachtet werden, wie ein Vorurteil entsteht, bzw. als solches klassifiziert werden kann und welche kognitiven Prinzipien dahinterstehen.
							</p>

							<p>
								<br/>
								<span className="font-weight-bold">Fairness im Machine Learning</span>
								<br/>
								<br/>
								Die Verzerrung von Algorithmen ist ein allgegenwärtiger Zustand, obwohl Entwickler solche Verzerrungen - die z.B. durch Diskriminierung entstehen - in der Programmierung nicht vorgesehen haben und Algorithmen nicht darauf ausgerichtet sind.<Footnote i={2} desc="Vgl. Hajian/Bonchi/Castillo 2016, S. 2125"/>
								{' '}
								Da solche Machine Learning Systeme allgegenwärtig innerhalb des alltäglichen Umfelds sind, muss das Prinzip von Fairness in die Konzeption und Entwicklung von Machine Learning Algorithmen aufgenommen werden.<Footnote i={3} desc="Vgl. Mehrabi u. a. 2019, S. 1"/>
								<br/>
								<br/>
								Nach Mehrabi u. a. (2019) ist Fairness im Kontext der Entscheidungsfindung die Abwesenheit jeglicher Voreingenommenheit oder Bevorzugung einer Person oder einer Gruppe aufgrund ihrer angeborenen oder erworbenen Eigenschaften.<Footnote i={4} desc="Vgl. Mehrabi u. a. 2019, S. 2"/>
								{' '}
								Ein Machine Learning Modell, das die Fairness berücksichtigt – auch als Fairness-Aware Machine Learning (<span className="font-weight-bold">FAML</span>) gängig, wird in unterschiedlichen Bereichen wie bspw. innerhalb der Rechtsprechung oder der Medizin benötigt. Neben dem Training eines solchen <span className="font-weight-bold">FAML</span>-Systems, kann Fairness durch die Mitigation von Biases ermöglicht werden.<Footnote i={5} desc="Vgl. Das u. a. 2020, S. 1"/>
								<br/>
								<br/>
								Fairness kann in Fairness eines Individuums und in Fairness einer Gruppe unterteilt werden. Die Fairness einer Gruppe wahrt dabei die Integrität einzelner Gruppen.
								Dabei müssen alle Gruppen einer Bevölkerung als Ganzes betrachtet werden und somit auch gleichbehandelt werden. Die Fairness eines Individuums, bzw. eines Einzelnen betrachtet hingegen den gleichen Umgang mit einzelnen Personen. Jede einzelne Person muss demnach einheitlich behandelt werden.<Footnote i={6} desc="Vgl. Zehlike u. a. 2017, S. 1571"/>
								<br/>
								<br/>
								Biases können in zwei Kategorien eingeteilt werden – <span className="font-weight-bold">User Biases</span> (engl. für Anwender-Verzerrungen) und <span className="font-weight-bold">Content Biases</span> (engl. für inhaltliche Verzerrungen). Bei einem <span className="font-weight-bold">User Bias</span> handelt es sich um die Verzerrung eines Anwenders, der Informationen erhält.
								{' '}
								Es wird angenommen, dass Attribute, die einen Anwender maßgeblich charakterisieren – so z.B. das Geschlecht oder die ethnische Herkunft – gesichert sind. Ein <span className="font-weight-bold">User Bias</span> liegt dann vor, wenn solche geschützten Attribute das Ergebnis eines Algorithmus beeinflussen und damit in direkten Zusammenhang die Person.<Footnote i={7} desc="Vgl. Pitoura u. a. 2018, S. 17"/>
								<br/>
								<br/>
								<span className="font-weight-bold">Content Biases</span> hingegen lassen sich nach der Eigenschaft klassifizieren, dass ein Online Information Provider (<span className="font-weight-bold">OIP</span>) verzerrte Ergebnisse liefert und diese – meist zu seinem Vorteil – verändert. Die Ergebnisse bleiben dabei unabhängig von einem Benutzer oder einer Benutzerin und werden durch den <span className="font-weight-bold">OIP</span> festgelegt.<Footnote i={8} desc="Vgl. Pitoura u. a. 2018, S. 17"/>
								<br/>
								<br/>
								Für die Mitigation von Biases gibt es Ansätze, diese auf Basis von Fairness abzumildern. Ein Beispiel hierfür stellt die MLFairnessPipeline dar. Innerhalb dieser Machine Learning Pipeline wird der Prozess auf drei Ebenen unterteilt. Zunächst findet ein Pre-processing von Trainings- und Testdaten statt, indem bestimmte Faktoren für die Mitigation von Biases gewichtet werden.
								<br/>
								Darauffolgend wird innerhalb des In-processing das Modell in Form eines neuronalen Netzwerks generiert und kontradiktorisches Debiasing genutzt. Hiermit soll erreicht werden, dass geschützte Attribute nicht auf Grundlage des Ergebnisses erraten werden können.
								Den letzten Schritt stellt das Post-processing dar, indem Ergebnisse von privilegierten- und privilegierten Personengruppen getauscht werden, die gleiche Grundvoraussetzungen besitzen, um das Modell als Fair klassifizieren zu können.<Footnote i={9} desc="Vgl. Bentivegna 2020"/>
								<br/>
								<br/>
								Dieser Sachverhalt des <span className="font-weight-bold">Content</span>, bzw. <span className="font-weight-bold">User Biases</span> kann als nicht fair betrachtet werden und spielt eine große Rolle bei der Diskussion um Fairness im maschinellen Lernen. Neben der Fairness spielen weitere Prinzipien eine Rolle im Machine Learning – so zum Beispiel jenes der Kausalität und Korrelation, welches im folgenden Abschnitt näher betrachtet wird.

							</p>

							<p>
								<br/>
								<span className="font-weight-bold">Kausalität und Korrelation im Machine Learning</span>
								<br/>
								<br/>
								Eine Publikation aus 2016 stellt dar, wie der Algorithmus Correctional Offender Management Profiling for Alternative Sanctions (COMPAS), welcher zu damaliger Zeit von unterschiedlichen Bundesstaaten der USA zur Rechtsprechung genutzt wurde, rassistisch voreingenommen ist.<Footnote i={10} desc="Vgl. Angwin u. a. 2016"/>
								{' '}
								Der Algorithmus schätzt demnach, dass eine Person mit schwarzer Hautfarbe eine höhere Wahrscheinlichkeit hat erneut strafrechtlich auffällig zu werden, als eine Person mit weißer Hautfarbe und den exakt gleichen Hintergrundparametern (siehe auch Wo wird ML verwendet? - Beispiele).<Footnote i={11} desc="Vgl. Lovejoy 2020"/>
								<br/>
								<br/>
								Das Problem des Algorithmus stellt die Verwechslung von Kausalität und Korrelation dar. Somit werden Muster von Verbrechen, welche in der Vergangenheit aufgetreten sind (Korrelation) damit verwechselt, dass die Hautfarbe einer Person die Wahrscheinlichkeit erhöht ein Verbrechen zu begehen (Kausalität).<Footnote i={12} desc="Vgl. Lovejoy 2020"/>
								<br/>
								<br/>
								Die Kausalität wird innerhalb der philosophischen Diskussion „oft als eine spezifische Beziehung zwischen Ereignissen betrachtet.“.<Footnote i={13} desc="Kühnel/Dingelstedt 2014, S. 1018"/>
								{' '}
								Die empirische Sozialforschung betrachtet die Kausalität als Frage danach, warum das Ergebnis B aufgetreten ist und sucht hierbei den Auslöser A. Spezifiziert soll hier die Beziehung zwischen A und B identifiziert werden und die Frage danach, ob das Ereignis A das Ergebnis B auslöst.<Footnote i={14} desc="Vgl. Kühnel/Dingelstedt 2014, S. 1018"/>
								<br/>
								<br/>
								Ein Beispiel für den Unterschied von Kausalität und Korrelation stellt ein heißer Sommertag dar, an dem die Sonne stark scheint. Dieser Sommertag hat als Kausalität, dass sich eine Person wegen der Hitze eine Kugel Eis kauft. Eine weitere Kausalität ist, dass diese Person durch die starke Sonneneinstrahlung einen Sonnenbrand bekommt. Bei der Beziehung zwischen Sonnenbrand und der Kugel Eis handelt es sich um eine Korrelation. Die Beziehung zwischen Sonnenbrand und Eis ist somit kein Kausalzusammenhang.<Footnote i={15} desc="Vgl. Figueroa 2019"/>
								<br/>
								<br/>
								Machine Learning ist sehr gut darin, Beziehungen in komplexen und großen Datenmengen zu identifizieren. Das Problem dabei besteht darin, dass es sich bei jenen Beziehungen um Korrelationen und nicht um Kausalitäten handelt, weshalb auch das ursprüngliche Problem des COMPAS-Algorithmus in den USA aufgetreten ist und der Einsatz im strafrechtlichen Prozess letztendlich gescheitert ist.<Footnote i={16} desc="Vgl. Lovejoy 2020"/>

							</p>

							<p>
								<br/>
								<span className="font-weight-bold">Zukunft von Machine Learning</span>
								<br/>
								<br/>
								Die Zukunft des Machine Learning ist es, solchen Algorithmen das Prinzip der Kausalität beizubringen, um zuvor erläuterten Problemen wie denen des COMPAS-Algorithmus entgegenwirken zu können. Nach Lovejoy bildet ein Paper von Babylon Heath einen Ansatz, wie das umgesetzt werden kann.<Footnote i={17} desc="Vgl. Lovejoy 2020"/>
								{' '}
								Hierbei wird die Diagnostik von Krankheiten näher betrachtet. Ein Arzt versucht die Symptome durch die Determinierung der Krankheit eines Patienten oder einer Patientin zu erklären. Bestehendes maschinelles Lernen identifiziert Krankheiten assoziativ, indem welche Krankheiten mit welchen bestimmten Symptomen korrelieren. Dadurch können ernsthafte Fehldiagnostiken attestiert werden.<Footnote i={18} desc="Vgl. Richens/Lee/Johri 2020, S. 1"/>
								<br/>
								<br/>
								Damit die Anzahl von Fehldiagnosen durch Machine Learning reduziert werden, soll in dem erläuterten Beispiel ein kausales Modell gewählt werden, indem die Behandlung einer Disease (engl. für Krankheit) D, zur Abmilderung eines Symptoms S führt. Als weitere Variable werden andere Außenfaktoren, z.B. eine genetische Auslegung als Variable R berücksichtigt.
								Dabei wird betrachtet, welche Symptome verschwinden, wenn eine spezifische Krankheit behandelt wird und welche dieser Symptome weiterhin erhalten bleiben, wenn keine Behandlung durchgeführt wird.<Footnote i={19} desc="Vgl. Richens/Lee/Johri 2020, S. 3 ff."/>

							</p>

							<p>
								<br/>
								<span className="font-weight-bold">Einfluss von Ethik auf das Machine Learning</span>
								<br/>
								<br/>
								Wenn neue Technologien zu allgemeinen Verunsicherungen, oder Problemen auf einer moralischen Ebene führen, müssen diese ethisch diskutiert werden.
								Da künstliche Intelligenz, bzw. maschinelles Lernen nachweislich rassistisch geprägt sein kann, oder Nachteile für bestimmte Personengruppen hervorrufen können, muss auch eine solche Technologie in Anbetracht der Ethik näher betrachtet werden.
								<br/>
								KI-Systeme sollen der Gesellschaft dienen und im speziellen soll eine verantwortungsbewusste KI-Entwicklung das Gemeinwohl fördern. Ferner sollen durch einen solchen Einsatz keine Zwänge entstehen, welche „ethische Normen des Zusammenlebens verletzen oder positive Entwicklungen beschränken.“<Footnote i={20} desc="Entnommen aus: Hessen 2021"/>
								{' '}
								Und dadurch den Schein einer Alternativlosigkeit wecken.<Footnote i={21} desc="Vgl. Hessen 2021"/>
								<br/>
								Grundwerte für ein eine ethische KI-Entwicklung seien demnach die „Selbstbestimmung, Gerechtigkeit und Privatheit“<Footnote i={22} desc="Entnommen aus: Hessen 2021"/> eines Individuums.
								<br/>
								<br/>
								Bei der Frage, wie Deutschland mit Fragen im Bereich der Künstlichen Intelligenz umgehen soll, hat sich der Ethikrat vier unterschiedliche Meinungen von KI-Forschenden eingeholt.<Footnote i={23} desc="Vgl. Deutscher Ethikrat 2021"/>
								{' '}
								Ulrike von Luxburg von der Universität Tübingen behauptet dabei, dass maschinelles Lernen keinen Ansatz von menschlicher Intelligenz besitzt und solche auch nicht in der Zukunft absehbar sei.
								Ein KI-System würde demnach durch Programmierung menschengesteuert lernen und so z.B. die Ansicht von Programmierenden wiedergeben, was sich in potenziellen Biases äußert.
								Von Luxburg plädiert dabei auf eine staatliche Regulierung von solchen Algorithmen, da neben positiven Einsätzen in der Medizin, solche Systeme auch Militär und ggf. ohne demokratische Legitimationen eingesetzt werden können.<Footnote i={24} desc="Vgl. Wallenfels 2021"/>
								<br/>
								<br/>
								Matthias Bethge von der Universität Tübingen behauptet, dass die letzten Jahre vom maschinellen Lernen geprägt seien und damit eine Trendwende erreicht werden kann. Die Systeme seien noch nicht ausgereift, tragen jedoch schon jetzt dabei zu, Menschen und ihre umgebene Landschaft zu unterstützen.
								Stefan Remy der Universität Magdeburg warnt von KI-Systemen besonders im Bereich des neuronalen und kognitiven Forschungsfeldes, da Erkenntnisse der Kommunikation zwischen menschlichen Nervenzellen fehlt und das durch den Einsatz von maschinellem Lernen nicht gänzlich ersetzt werden kann.
								<br />
								<br />
								Tanja Schultz von der Universität Bremen behauptet, dass KI-Systeme allgegenwärtig ist und in aller Leben vorhanden sei.
								Dabei spricht sich Schultz explizit dafür aus, dass Regulierungen von derartigen Algorithmen durch demokratische Regierungen durchgeführt werden sollen und nicht in der Hand von gewinnorientierten IT-Unternehmen verweilen soll.<Footnote i={25} desc="Vgl. Wallenfels 2021"/>
								<br/>
								<br/>
								Neben den genannten Plädoyers hat die European Union High Level Expert Group on Artificial Intelligence im Jahr 2019 ethische Richtlinien für vertrauenswürdige Künstliche Intelligenz festgelegt:
								<br/>
								<br/>
								1.	Rechtmäßig - unter Beachtung aller geltenden Gesetze und Vorschriften,
								<br/>
								<br/>
								2.	Ethisch - unter Beachtung ethischer Grundsätze und Werte,
								<br/>
								<br/>
								3.	Robust - sowohl aus technischer Sicht als auch unter Berücksichtigung des sozialen Umfelds.<Footnote i={26} desc="DG Connect 2021"/>
								<br/>
								<br/>
								Die genannten Prinzipien und Richtlinien sind bei der Abmilderung von Verzerrungen innerhalb des maschinellen Lernens von großer Bedeutung, damit solche Algorithmen in Zukunft noch besser werden und keine Benachteiligungen für bestimmte Personengruppen schafft.
								<br/>
								<br/>
								Nachdem das Grundverständnis für das Auftreten von Biases und der Bedarf von Mitigation solcher Biases aufgezeigt wurde, sollen im Folgenden unterschiedliche Lösungsansätze der Mitigation von Biases dargestellt werden.
								<br/>
								Die Mitigation von Biases innerhalb von KI-Systemen kann nach Smith und Rustagi (2020) auf drei Ebenen unterteilt werden.<Footnote i={27} desc="Vgl. Smith/Rustagi 2020, S. 42"/>
								{' '}

							</p>
							{getFooter(getFootnotes, 'MitiBasic')}
						</div>
					)}
				</Footnotes>
			</AbstractTextExpandable>
		);
	}
}
