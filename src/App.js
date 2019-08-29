import React, { Component } from 'react'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <p>This is a simple webpage running in a Docker container.</p>
                <p>It will eventually connect to the Horizon exchange and do something cool.</p>
            </div>
        );
    }
}

export default App;

