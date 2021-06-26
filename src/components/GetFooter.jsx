import React from 'react';

export function getFooter(getFootnotes, component = 'FeatureComponent') {
	return (
		<><hr/>
			<ol style={{listStyleType: 'none'}}>
				{Object.keys(getFootnotes()).map(i => {
					return (
						<li key={component + '-Fussnote ' + i}><sup>{i}</sup>&nbsp;{getFootnotes()[i].desc}</li>
					);
				})}
			</ol>
		</>
	);
}
