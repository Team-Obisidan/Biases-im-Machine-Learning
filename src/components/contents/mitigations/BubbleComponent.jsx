import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {Component, Fragment} from "react";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export class BubbleComponent extends Component{
    

    render(){
        return(<Fragment><div className="kreis1">
        <span className="white-span">
            <FontAwesomeIcon icon={faYoutube} size="4x" />
        </span>
        <h5>Technischer Ansatz</h5>
        
    </div>
    <div className="kreis2">
        <span className="white-span">
            <FontAwesomeIcon icon={faYoutube} size="4x" />
        </span>
        <h5>Gesellschaftlicher Ansatz</h5>
        
    </div>
            </Fragment>

        )
    }
}
