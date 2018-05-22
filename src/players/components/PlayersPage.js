import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as playerActions from '../actions';
import PlayersFilterForm from './PlayersFilterForm';
import PlayersList from './PlayersList';
import {getPositionsFormattedForDropdown} from '../selectors';

export class PlayersPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            filters: Object.assign({}, this.props.filters),
        };

        this.updateFiltersState = this.updateFiltersState.bind(this);
        this.filterPlayers = this.filterPlayers.bind(this);
    }

    updateFiltersState(event) {
        const field = event.target.name;
        let value = event.target.value;
        let filters = Object.assign({}, this.state.filters);

        if (field === 'age') {
            if (value.length === 2) {
                if (value < 18 || value > 40) {
                    value = '';
                }
            } else if (value.length > 2) {
                value = '';
            }
        }

        filters[field] = value;

        return this.setState({filters: filters});
    }

    filterPlayers(event) {
        event.preventDefault();
        this.props.actions.loadPlayers(this.state.filters);
    }

    render() {
        const {players, positions} = this.props;
        return (
            <div>
                <PlayersFilterForm
                    allPositions={positions}
                    onChange={this.updateFiltersState}
                    onFilter={this.filterPlayers}
                    filters={this.state.filters}/>

                <PlayersList players={players}/>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        players: state.players,
        positions: getPositionsFormattedForDropdown(state),
        filters: {name: '', position: '', age: ''}
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);
