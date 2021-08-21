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
          modal: false,
        };
        this.taskSelected = this.taskSelected.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        axios.get('https://chores-app-api.herokuapp.com/chores')
            .then(res => {
                let choresMap = new Map()
                for (let chore of res.data) {
                    choresMap.set(chore._id, chore)
                }
                return choresMap
            })
            .then(choresMap => {
                this.setState({
                    Chores: choresMap
                })
            })
    }

    taskSelected(e) {
        let choreClickedId = e.target.id
        this.setState({
            currentChore: this.state.Chores.get(choreClickedId),
            modal: true
        })
        // console.log(e.target.id)
        // console.log(this.state.Chores)
    }

    closeModal() {
        this.setState({
            modal: false
        })
    }

    render(){
        return (
            <div>
                {this.state.Chores != null &&
                    <div>
                        <div className="chore-grid-container">
                            {Array.from(this.state.Chores.values()).map(chore => {
                                return (
                                    <div className="chore-card" id={chore._id} key={chore._id} onClick={this.taskSelected}>
                                        <div>{chore.choreName}</div>
                                        <div>{chore.points}</div>
                                    </div>
                                )
                            })}
                        </div>
                        {this.state.modal &&
                            <Enter_Data
                                currentChore={this.state.currentChore}
                                closeModal={this.closeModal}
                            />
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Tasks;