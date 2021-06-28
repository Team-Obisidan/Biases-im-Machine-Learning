import {faBook} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {AbstractTextExpandable} from './AbstractTextExpandable.jsx';

export const LibraryExpandable = () => {
	return (

		<AbstractTextExpandable>
			<FontAwesomeIcon icon={faBook} size="4x"/>
			<span/>
<<<<<<< HEAD
			<div className="text-left">
				<p><span className="font-weight-bold">Adorno, M./Houdeau, D./Schauf, T./Campbell, P. C./Werling, C./Dodt, A. (2020):</span> Machine Learning in der Anwendung, in: Digitale Welt, 4. Jg., Nr. 3, S. 67–75</p>
				
				<p><span className="font-weight-bold">Angwin, J./Larson, J./Mattu, S./Kirchner, L. (2016):</span> Machine Bias. There’s software used across the country to predict future criminals. And it’s biased against blacks., https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing, Abruf: 25.05.2021</p>
				<p><span className="font-weight-bold">Arora, A. (2018):</span> Anwendungsgebiete für Machine Learning, https://www.agile-im.de/2018/02/08/anwendungsgebiete-fuer-machine-learning/, Abruf: 21.06.2021</p>
				
				<p><span className="font-weight-bold">DeVries, T./Misra, I./Wang, C./van der Maaten, L. (2019):</span> Does Object Recognition Work for Everyone? In: Computer Vision Foundation / IEEE (ed.): IEEE Conference on Computer Vision and Pattern Recognition Workshops, CVPR Workshops 2019: Long Beach, CA, USA, S. 52–59</p>
				<p><span className="font-weight-bold">Hagendorff, T. (2019):</span> Maschinelles Lernen und Diskriminierung: Probleme und Lösungsansätze, in: Österreichische Zeitschrift für Soziologie, 44. Jg., Nr. S1, S. 53–66</p>
				<p><span className="font-weight-bold">Kagian, A./Dror, G./Leyvand, T./Meipjson, I./Cohen-Or, D./Ruppin, E. (2008):</span> A machine learning predictor of facial attractiveness reveapng human-pke psychophysical biases, in: Vision research, 48. Jg., Nr. 2, S. 235–243</p>
				<p><span className="font-weight-bold">Kersting, K./Tresp, V. (2019):</span> Maschinelles und Tiefes Lernen: Der Motor für „KI made in Germany“, in: Digitale Welt, 3. Jg., Nr. 4, S. 32–34</p>
				<p><span className="font-weight-bold">Liu, H./Gegov, A./Cocea, M. (2016):</span> Nature and biology inspired approach of classification towards reduction of bias in machine learning, In: 2016 International Conference on Machine Learning and Cybernetics (ICMLC), S. 588–593</p>
				<p><span className="font-weight-bold">Mehrabi, N./Morstatter, F./Saxena, N./Lerman, K./Galstyan, A. (2019):</span> A Survey on Bias and Fairness in Machine Learning, http://arxiv.org/pdf/1908.09635v2, Abruf: 10.06.2021</p>
				<p><span className="font-weight-bold">Northpoint Inc. (2021):</span> Practitioners-Guide-to-COMPAS-Core, https://www.documentcloud.org/documents/2840784-Practitioner-s-Guide-to-COMPAS-Core.html#document/p30/a296482, Abruf: 21.06.2021</p>
				<p><span className="font-weight-bold">Oppenheim, M. (2018):</span> Amazon scraps 'sexist AI' recruitment tool, https://www.independent.co.uk/life-style/gadgets-and-tech/amazon-ai-sexist-recruitment-tool-algorithm-a8579161.html, Abruf: 21.06.2021</p>
				
				<p><span className="font-weight-bold">Schäfers, B. (2018):</span> Gesellschaft, in: Grundbegriffe der Soziologie, (Hrsg.: Kopp, J./Steinbach, A.), Wiesbaden: Springer VS, S. 141–145</p>
				<p><span className="font-weight-bold">Suresh H. / Guttag J. V. (2020):</span> A Framwork for Unterstanding Unintended Consequences of Machine Learning, https://arxiv.org/abs/1901.10002, Abruf: 10.06.2021</p>
				<p><span className="font-weight-bold">Welsch, A./Eitle, V./Buxmann, P. (2018):</span> Maschinelles Lernen, in: HMD Praxis der Wirtschaftsinformatik, 55. Jg., Nr. 2, S. 366–382</p>
			</div>
=======
			<>
				<p><span className="font-weight-bold text-left">Hagendorff, T. (2019):</span> Maschinelles Lernen und Diskriminierung: Probleme und Lösungsansätze, in: Österreichische Zeitschrift für Soziologie, 44. Jg., Nr. S1, S. 53–66</p>
				<p><span className="font-weight-bold text-left">Kagian, A./Dror, G./Leyvand, T./Meipjson, I./Cohen-Or, D./Ruppin, E. (2008):</span> A machine learning predictor of facial attractiveness reveapng human-pke psychophysical biases, in: Vision research, 48. Jg., Nr. 2, S. 235–243</p>
				<p><span className="font-weight-bold text-left">Kersting, K./Tresp, V. (2019):</span> Maschinelles und Tiefes Lernen: Der Motor für „KI made in Germany“, in: Digitale Welt, 3. Jg., Nr. 4, S. 32–34</p>
				<p><span className="font-weight-bold text-left">Mehrabi, N./Morstatter, F./Saxena, N./Lerman, K./Galstyan, A. (2019):</span> A Survey on Bias and Fairness in Machine Learning, http://arxiv.org/pdf/1908.09635v2, Abruf: 10.06.2021</p>
				<p><span className="font-weight-bold text-left">Schäfers, B. (2018):</span> Gesellschaft, in: Grundbegriffe der Soziologie, (Hrsg.: Kopp, J./Steinbach, A.), Wiesbaden: Springer VS, S. 141–145</p>
				<p><span className="font-weight-bold text-left">Suresh H. / Guttag J. V. (2020):</span> A Framwork for Unterstanding Unintended Consequences of Machine Learning, https://arxiv.org/abs/1901.10002, Abruf: 10.06.2021</p>
				<p><span className="font-weight-bold text-left">Welsch, A./Eitle, V./Buxmann, P. (2018):</span> Maschinelles Lernen, in: HMD Praxis der Wirtschaftsinformatik, 55. Jg., Nr. 2, S. 366–382</p>
			</>
>>>>>>> origin/feature/04-add-content
		</AbstractTextExpandable>

	);
};
