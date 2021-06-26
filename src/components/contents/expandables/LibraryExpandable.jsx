import {faBook} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {AbstractTextExpandable} from './AbstractTextExpandable.jsx';

export const LibraryExpandable = () => {
	return (

		<AbstractTextExpandable>
			<FontAwesomeIcon icon={faBook} size="4x"/>
			<span/>
			<div className="text-left">
				<p><span className="font-weight-bold">Hagendorff, T. (2019):</span> Maschinelles Lernen und Diskriminierung: Probleme und Lösungsansätze, in: Österreichische Zeitschrift für Soziologie, 44. Jg., Nr. S1, S. 53–66</p>
				<p><span className="font-weight-bold">Kagian, A./Dror, G./Leyvand, T./Meipjson, I./Cohen-Or, D./Ruppin, E. (2008):</span> A machine learning predictor of facial attractiveness reveapng human-pke psychophysical biases, in: Vision research, 48. Jg., Nr. 2, S. 235–243</p>
				<p><span className="font-weight-bold">Kersting, K./Tresp, V. (2019):</span> Maschinelles und Tiefes Lernen: Der Motor für „KI made in Germany“, in: Digitale Welt, 3. Jg., Nr. 4, S. 32–34</p>
				<p><span className="font-weight-bold">Mehrabi, N./Morstatter, F./Saxena, N./Lerman, K./Galstyan, A. (2019):</span> A Survey on Bias and Fairness in Machine Learning, http://arxiv.org/pdf/1908.09635v2, Abruf: 10.06.2021</p>
				<p><span className="font-weight-bold">Schäfers, B. (2018):</span> Gesellschaft, in: Grundbegriffe der Soziologie, (Hrsg.: Kopp, J./Steinbach, A.), Wiesbaden: Springer VS, S. 141–145</p>
				<p><span className="font-weight-bold">Suresh H. / Guttag J. V. (2020):</span> A Framwork for Unterstanding Unintended Consequences of Machine Learning, https://arxiv.org/abs/1901.10002, Abruf: 10.06.2021</p>
				<p><span className="font-weight-bold">Welsch, A./Eitle, V./Buxmann, P. (2018):</span> Maschinelles Lernen, in: HMD Praxis der Wirtschaftsinformatik, 55. Jg., Nr. 2, S. 366–382</p>
			</div>
		</AbstractTextExpandable>

	);
};
