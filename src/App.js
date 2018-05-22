import React from 'react';
import PlayersPage from './players/components/PlayersPage'

export class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="title">Football Player Finder</h1>
                <PlayersPage/>
            </div>
        );
    }
}

export default App;
