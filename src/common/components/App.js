import React from 'react';
import {connect} from 'react-redux';

import Header from "./Header";
import PlayerPage from '../../players/components/PlayersPage'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading}/>
                <PlayerPage/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
