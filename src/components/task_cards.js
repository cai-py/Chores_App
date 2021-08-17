import React from "react";
import './styles/task_cards.css'
import axios from "axios";

class Tasks extends React.Component {
    state = {
        Chores: null
    }
    componentDidMount() {
        axios.get('https://chores-app-api.herokuapp.com/chores')
            .then(res => {
                this.setState({
                    Chores: res.data
                })
            })
    }
    render(){
        return (
            <div>
                {this.state.Chores != null &&
                    <ul className="chore-grid-container">
                        {this.state.Chores.map(chore => {
                            return (
                                <li className="chore-card">
                                    <div>{chore.choreName}</div>
                                    <div>{chore.points}</div>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}

export default Tasks;