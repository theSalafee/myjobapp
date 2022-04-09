import { Component } from 'react';
import Table from './Table';
class App extends Component {

    state = {
        firstName: 'Naasir',
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    };

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container" >
                <h1>Hello, React!</h1>
                <h2>{this.state.firstName}</h2>
                <hr />
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App;