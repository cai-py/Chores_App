import React from "react";
import './styles/task_cards.css'
import axios from "axios";

class Tasks extends React.Component {
    state = {
        Chores: []
    }
    componentDidMount = () => {
        axios.get('https://chores-app-api.herokuapp.com/chores')
            .then(res => {
                this.setState({
                    Chores: res.data
                })
            })
    }
    render(){
        return (
            <div className="chore-grid-container">
                {console.log(this.state.Chores)}
            </div>
        )
    }
}

export default Tasks;