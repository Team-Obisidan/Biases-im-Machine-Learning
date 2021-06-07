import React, { Component } from "react";

export class HeaderComponent extends Component {


    render() {
        return (
            <header>
                <div className="headline" >
                    <div className="container">

                        <div className="topic">
                            <h1>Quis custodiet ipsos custodes?</h1>
                            <h3>-Biases im Machine Learning-</h3>
                            <p>Sebastian Ciornei, Tom Dott, Lukas Fruntke, Oliver Groh, Maik Ruoff</p>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}