import React, {Component} from "react";
import { SourcesComponent } from "./contents/SourcesComponent";

export class FurtherLearningComponent extends Component{
    

    render(){
        return(<div className="container">
        <div className="row">

            <div className="more col-lg-7" >

                <div className="more1">
                    <h6>Mehr zu den Themen:</h6>

                    <div className="mo-boxen">

                        <div className="box1">
                            <p>text</p>
                        </div>

                        <div className="box2">
                            <p>text</p>
                        </div>

                        <div className="box1">

                        </div>

                        <div className="box2">

                        </div>

                        <div className="box1">

                        </div>

                        <div className="box2">

                        </div>

                    </div>

                </div>

                

            </div>

            <div className="quellen col-lg-4">
                <SourcesComponent />
            </div>
            

        </div>
    </div>
        )
    }
}
