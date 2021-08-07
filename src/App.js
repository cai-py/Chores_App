import React from "react";
import "./App.css";
import Tasks from './components/task_cards'

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Tasks/>
            </div>
        )
    }
}

export default App;