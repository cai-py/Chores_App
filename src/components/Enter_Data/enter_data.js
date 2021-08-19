import React from "react";
import './enter_data.css'

class Enter_Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
            <div>
                <div className="form-container" onClick={this.props.toggleTaskClicked}>
                    <div className="form">
                        <h1>{this.props.currentChore.choreName}</h1>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Enter_Data;