import React from "react";
import './enter_data.css'
import axios from "axios";

class Enter_Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: null,
        };
    }

    componentDidMount() {
        axios.get('https://chores-app-api-3550fe946076.herokuapp.com/users')
            .then(res => {
                let usersMap = new Map()
                for (let user of res.data) {
                    usersMap.set(user._id, user)
                }
                return usersMap
            })
            .then(usersMap => {
                this.setState({
                    Users: usersMap
                })
            })
    }

    render(){
        return (
            <div className="form-container">
                <div className="overlay" onClick={this.props.closeModal}></div>
                {this.state.Users != null &&
                    <div className="form" onClick={this.click}>
                        <div className="card-info-bar">
                            <div className='card-title'>{this.props.currentChore.choreName}</div>
                            <div className='card-points'>{this.props.currentChore.points}</div>
                        </div>
                        <div className="users-container">
                            {Array.from(this.state.Users.values()).map(user => {
                                return (
                                    <button className="userButton" id={user._id} key={user._id}>
                                        <div>{user.userName}</div>
                                    </button>
                                )
                            })}
                        </div>
                        <div className="submit-container">
                            <button className="submit">Submit</button>
                        </div>
                    </div>
                }
            </div>
            
        )
    }
}

export default Enter_Data;