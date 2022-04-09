import { Component } from 'react';
import Table from './Table';
class App extends Component {

    initialState = {
        firstName: 'Naasir'
    };

    render() {
        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <h2>{this.initialState.firstName}</h2>
                <hr />
                <Table />
            </div>
        )
    }
}

export default App;