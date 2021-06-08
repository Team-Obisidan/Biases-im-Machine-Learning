import {FeatureComponent} from 'components/FeatureComponent';
import {FurtherLearningComponent} from 'components/FurtherLearningComponent';
import {HeaderComponent} from 'components/HeaderComponent';
import {MitigationComponent} from 'components/MitigationComponent';
import {MLTheoryComponent} from 'components/MlTheoryComponent';
import React from 'react';
import './App.css';

const App = () => {
	return (
		<div className="poster">

			<HeaderComponent/>
			<FeatureComponent/>

			<MLTheoryComponent/>

			<MitigationComponent/>

			<div className="abschluss">

				<FurtherLearningComponent/>

			</div>

		</div>
	);
};

export default App;
