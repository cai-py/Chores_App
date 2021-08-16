import React from "react";
import './styles/task_cards.css'
import axios from "axios";

class Tasks extends React.Component {
    componentDidMount = () => {
        axios.get('https://chores-app-api.herokuapp.com/chores')
            .then(function (response) {
                console.log(response)
            })
    }
    render(){
        return (
            <div className="chore-grid-container">
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                <div className="chore-card">
                    <div className="chore-name">Chore</div>
                    <div className="chore-value">5</div>
                </div>
                
            </div>
        )
    }
}

export default Tasks;