import React from "react";
import './styles/task_cards.css'

class Tasks extends React.Component {
    render(){
        return (
            <div className="taskgrid-container">
                <ul className="task-grid">
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    <li className="task-item">
                        <div className="card-title">Title</div>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default Tasks;