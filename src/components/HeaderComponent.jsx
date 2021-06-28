import React, {Component} from 'react';

export class HeaderComponent extends Component {
	render() {
		return (
			<header>
				<div className="headline">
					<div className="container">

						<div className="topic">
							<h1 className="title" style={{textShadow: '1px 3px rgba(0, 0, 0, 0.175)'}}>Quis custodiet ipsos custodes?</h1>
							<h3 className="title" style={{textShadow: '1px 2px rgba(0, 0, 0, 0.175)'}}>- Biases im Machine Learning -</h3>
							<p>
								<a href="https://www.linkedin.com/in/sebastian-ciornei-98430018a/" target="_blank" className="name-link" rel="noreferrer">Sebastian Ciornei</a>,
								{' '}
								<a href="https://www.linkedin.com/in/tom-dott-57a52a1b6/" target="_blank" className="name-link" rel="noreferrer">Tom Dott</a>,
								{' '}
								<a href="https://www.linkedin.com/in/lukas-fruntke/" target="_blank" className="name-link" rel="noreferrer">Lukas Fruntke</a>,
								{' '}
								<a href="https://www.linkedin.com/in/oliver-groh-a8295b206/" target="_blank" className="name-link" rel="noreferrer">Oliver Groh</a>,
								{' '}
								<a href="https://www.linkedin.com/in/maik-pascal-ruoff-945a18214/" target="_blank" className="name-link" rel="noreferrer">Maik Ruoff</a>
							</p>
						</div>

					</div>
				</div>
			</header>
		);
	}
}

