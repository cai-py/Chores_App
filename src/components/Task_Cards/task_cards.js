import React from "react";
import './task_cards.css'
import axios from "axios";
import Enter_Data from '../Enter_Data/enter_data';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Chores: null,
        };
        this.toggleTaskClicked = this.toggleTaskClicked.bind(this);
    }

    componentDidMount() {
        axios.get('https://chores-app-api.herokuapp.com/chores')
            .then(res => {
                this.setState({
                    Chores: res.data
                })
            })
    }

    toggleTaskClicked(e) {
        console.log('clicked')
    }

    render(){
        return (
            <div>
                {this.state.Chores != null &&
                    <ul className="chore-grid-container">
                        {this.state.Chores.map(chore => {
                            return (
                                <li className="chore-card" onClick={this.toggleTaskClicked}>
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