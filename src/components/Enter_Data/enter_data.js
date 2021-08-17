import React from "react";
import './enter_data.css'

class Enter_Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalDisplay: props.showForm
        };
    }

    render(){
        return (
            <div>
                {this.state.modalDisplay &&
                    <div className="form-container">
                        <div className="form">

                        </div>
                    </div>
                }
            </div>
            
        )
    }
}

export default Enter_Data;