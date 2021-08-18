import React from "react";
import './task_cards.css'
import axios from "axios";
import Enter_Data from '../Enter_Data/enter_data';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Chores: null,
          currentChore: null,
          choreClicked: false,
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
        let choreClicked = e.target.id
        this.setState({
            currentChore: choreClicked,
            choreClicked: !this.state.choreClicked
        })
        console.log(this.state.Chores)
    }

    render(){
        return (
            <div>
                {this.state.Chores != null &&
                    <div>
                        <ul className="chore-grid-container">
                            {this.state.Chores.map(chore => {
                                return (
                                    <li className="chore-card" id={chore._id} key={chore._id} onClick={this.toggleTaskClicked}>
                                        <div>{chore.choreName}</div>
                                        <div>{chore.points}</div>
                                    </li>
                                )
                            })}
                        </ul>
                        {this.state.choreClicked && 
                            <Enter_Data
                                Chores={this.state.Chores}
                                currentChore={this.state.currentChore}
                                toggleTaskClicked={this.toggleTaskClicked}
                            />
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Tasks;