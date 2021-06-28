import { Footnotes } from '@team-obisidan/react-footnotes';
import { getFooter } from 'components/GetFooter.jsx';
import React, {Component} from 'react';
import {TextExpandable} from '../expandables/TextExpandable.jsx';

export class MitiBasicsComponent extends Component {
	render() {
		return (
			<TextExpandable title="Grundlagen der Mitigation von Biases" length="250">
				<Footnotes>
								{({Footnote, getFootnotes}) => (
									<div style={{textAlign: 'left'}}>

										<p>
										Die Mitigation (engl. für Abmilderung) von Biases (engl. für Vorurteile, Voreingenommenheiten, Neigungen) verfolgt das Ziel, innerhalb von Machine Learning Algorithmen Verzerrungen gegenüber unterprivilegierten Gruppen zu entzerren und dabei faire Vorhersagen zu treffen, ohne die Klassifizierungsgenauigkeit und die Performance eines Algorithmus zu beeinflussen. 
										Die Mitigation beeinflusst dabei alle Personengruppen, um ein faires Leben miteinander zu ermöglichen. Die Erkennung solcher Biases und die darauffolgende Mitigation ist in vielen Fällen schwer zu identifizieren und zu lösen.<Footnote i={1} desc="Vgl. Bentivegna 2020"/>   
										<br />
										<br />
										Für ein näheres Verständnis werden im Folgenden grundlegende Konzepte dargestellt, wie Vorurteile innerhalb des Machine Learnings abgemildert werden können. Dabei soll betrachtet werden, wie ein Vorurteil entsteht, bzw. als solches klassifiziert werden kann und welche kognitiven Prinzipien dahinterstehen.
										</p>
										

										<p>
										<br />
										<span className="font-weight-bold">Fairness im Machine Learning</span>
										<br />
										<br />
										Die Verzerrung von Algorithmen ist ein allgegenwärtiger Zustand, obwohl Entwickler solche Verzerrungen - die z.B. durch Diskriminierung entstehen - in der Programmierung nicht vorgesehen haben und Algorithmen nicht darauf ausgerichtet sind.<Footnote i={2} desc="Vgl. Hajian/Bonchi/Castillo 2016, S. 2125"/>    
										{" "}
										Da solche Machine Learning Systeme allgegenwärtig innerhalb des alltäglichen Umfelds sind, muss das Prinzip von Fairness in die Konzeption und Entwicklung von Machine Learning Algorithmen aufgenommen werden.<Footnote i={3} desc="Vgl. Mehrabi u. a. 2019, S. 1"/>   
										<br />
										<br />
										Nach Mehrabi u. a. (2019) ist Fairness im Kontext der Entscheidungsfindung die Abwesenheit jeglicher Voreingenommenheit oder Bevorzugung einer Person oder einer Gruppe aufgrund ihrer angeborenen oder erworbenen Eigenschaften.<Footnote i={4} desc="Vgl. Mehrabi u. a. 2019, S. 2"/> 
										{" "}
										Ein Machine Learning Modell, das die Fairness berücksichtigt – auch als Fairness-Aware Machine Learning (FAML) gängig, wird in unterschiedlichen Bereichen wie bspw. innerhalb der Rechtsprechung oder der Medizin benötigt. Neben dem Training eines solchen FAML-Systems, kann Fairness durch die Mitigation von Biases ermöglicht werden.<Footnote i={5} desc="Vgl. Das u. a. 2020, S. 1"/> 
										<br />
										<br />
										Biases können in zwei Kategorien eingeteilt werden – User Biases (engl. für Anwender-Verzerrungen) und Content Biases (engl. für inhaltliche Verzerrungen). Bei einem User Bias handelt es sich um die Verzerrung eines Anwenders, der Informationen erhält.  Es wird angenommen, dass Attribute, die einen Anwender maßgeblich charakterisieren – so z.B. das Geschlecht oder die ethnische Herkunft – gesichert sind. Ein User Bias liegt dann vor, wenn solche Attribute das <Footnote i={6} desc="Vgl. Pitoura u. a. 2018, S. 17"/> 

										</p>

										<p>
										<br />
										<span className="font-weight-bold">Kausalität und Korrelation im Machine Learning</span>
										<br />
										<br />
										Eine Publikation aus 2016 stellt dar, wie der Algorithmus Correctional Offender Management Profiling for Alternative Sanctions (COMPAS), welcher zu damaliger Zeit von unterschiedlichen Bundesstaaten der USA zur Rechtsprechung genutzt wurde, rassistisch voreingenommen ist.<Footnote i={7} desc="Vgl. Angwin u. a. 2016"/>   
										{" "}
										Der Algorithmus schätzt demnach, dass eine Person mit schwarzer Hautfarbe eine höhere Wahrscheinlichkeit hat erneut strafrechtlich auffällig zu werden, als eine Person mit weißer Hautfarbe und den exakt gleichen Hintergrundparametern.<Footnote i={8} desc="Vgl. Lovejoy 2020"/>  
										<br />
										<br />
										Das Problem des Algorithmus stellt die Verwechslung von Kausalität und Korrelation dar. Somit werden Muster von Verbrechen, welche in der Vergangenheit aufgetreten sind (Korrelation) damit verwechselt, dass die Hautfarbe einer Person die Wahrscheinlichkeit erhöht ein Verbrechen zu begehen (Kausalität).<Footnote i={9} desc="Vgl. Lovejoy 2020"/>  
										<br />
										<br />
										Die Kausalität wird innerhalb der philosophischen Diskussion „oft als eine spezifische Beziehung zwischen Ereignissen betrachtet.“.<Footnote i={10} desc="Kühnel/Dingelstedt 2014, S. 1018"/>  
										{" "}
										Die empirische Sozialforschung betrachtet die Kausalität als Frage danach, warum das Ergebnis B aufgetreten ist und sucht hierbei den Auslöser A. Spezifiziert soll hier die Beziehung zwischen A und B identifiziert werden und die Frage danach, ob das Ereignis A das Ergebnis B auslöst.<Footnote i={11} desc="Vgl. Kühnel/Dingelstedt 2014, S. 1018"/> 
										<br />
										<br />
										Ein Beispiel für den Unterschied von Kausalität und Korrelation stellt ein heißer Sommertag dar, an dem die Sonne stark scheint. Dieser Sommertag hat als Kausalität, dass sich eine Person wegen der Hitze eine Kugel Eis kauft. Eine weitere Kausalität ist, dass diese Person durch die starke Sonneneinstrahlung einen Sonnenbrand bekommt. Bei der Beziehung zwischen Sonnenbrand und der Kugel Eis handelt es sich um eine Korrelation. Die Beziehung zwischen Sonnenbrand und Eis ist somit kein Kausalzusammenhang.<Footnote i={12} desc="Vgl. Figueroa 2019"/>   
										<br />
										<br />
										Machine Learning ist sehr gut darin, Beziehungen in komplexen und großen Datenmengen zu identifizieren. Das Problem dabei besteht darin, dass es sich bei jenen Beziehungen um Korrelationen und nicht um Kausalitäten handelt, weshalb auch das ursprüngliche Problem des COMPAS-Algorithmus in den USA aufgetreten ist und der Einsatz im strafrechtlichen Prozess letztendlich gescheitert ist.<Footnote i={13} desc="Vgl. Lovejoy 2020"/> 

										</p>

										<p>
										<br />
										<span className="font-weight-bold">Zukunft von Machine Learning</span>
										<br />
										<br />
										Die Zukunft des Machine Learning ist es, solchen Algorithmen das Prinzip der Kausalität beizubringen, um zuvor erläuterten Problemen wie denen des COMPAS-Algorithmus entgegenwirken zu können. Nach Lovejoy bildet ein Paper von Babylon Heath einen Ansatz, wie das umgesetzt werden kann.<Footnote i={14} desc="Vgl. Lovejoy 2020"/> 
										{" "}
										Hierbei wird die Diagnostik von Krankheiten näher betrachtet. Ein Arzt versucht die Symptome durch die Determinierung der Krankheit eines Patienten oder einer Patientin zu erklären. Bestehendes maschinelles Lernen identifiziert Krankheiten assoziativ, indem welche Krankheiten mit welchen bestimmten Symptomen korrelieren. Dadurch können ernsthafte Fehldiagnostiken attestiert werden.<Footnote i={15} desc="Vgl. Richens/Lee/Johri 2020, S. 1"/>
										<br /> 
										<br />
										Damit die Anzahl von Fehldiagnosen durch Machine Learning reduziert werden, soll in dem erläuterten Beispiel ein kausales Modell gewählt werden, indem die Behandlung einer Disease (engl. für Krankheit) D, zur Abmilderung eines Symptoms S führt. Als weitere Variable werden andere Außenfaktoren, z.B. eine genetische Auslegung als Variable R berücksichtigt.<Footnote i={16} desc="Vgl. Richens/Lee/Johri 2020, S. 3 ff."/> 
										Dabei wird betrachtet, welche Symptome verschwinden, wenn eine spezifische Krankheit behandelt wird und welche dieser Symptome weiterhin erhalten bleiben, wenn keine Behandlung durchgeführt wird. 

										</p>

										{getFooter(getFootnotes)}
									</div>
								)}
				</Footnotes>
			</TextExpandable>
		);
	}
}
