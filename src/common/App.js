import React from 'react';
import {connect} from 'react-redux';

import Header from "./components/Header";
import PlayerPage from '../players/components/PlayersPage'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading}/>
                <PlayerPage players={this.props.players}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        players: state.players
    };
}

export default connect(mapStateToProps)(App);
