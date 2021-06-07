import React, {Component} from 'react';
import {BubbleComponent} from './contents/mitigations/BubbleComponent.jsx';
import {IndustrialComponent} from './contents/mitigations/IndustrialComponent.jsx';
import {OrganisationalComponent} from './contents/mitigations/OrganisationalComponent.jsx';
import {SocietalComponent} from './contents/mitigations/SocietalComponent.jsx';

export class MitigationComponent extends Component {
	render() {
		return (
			<div className="mitigation">
				<div className="container">
					<div className="row">
						<div className="miti-box">
							<div className="row">
								<div className="textmiti col-lg-8">
									<div className="überschrift2">
										<h2>Mitigation von Biases in ML</h2>
									</div>
									<div className="inter-lvl">

										<div className="inhalt4">
											<SocietalComponent/>
										</div>

										<div className="inhalt5 ">
											<IndustrialComponent/>
										</div>

										<div className="inhalt6 ">
											<OrganisationalComponent/>
										</div>

									</div>
								</div>

								<div className="kreismiti col-lg-4">
									<BubbleComponent/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
