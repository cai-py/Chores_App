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
            <div className="form-container">
                <div className="form">
                    <div className="card-info-bar">
                        <div className='card-title'>{this.props.currentChore.choreName}</div>
                        <div className='card-points'>{this.props.currentChore.points}</div>
                    </div>
                    <div className="users-container">
                        
                    </div>
                    <div className="buttons-container">
                        <button className="close-button" onClick={this.props.closeModal}>Close</button>
                        <button className="submit-button" onClick={console.log('send rountes to submit')}>Submit</button>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Enter_Data;