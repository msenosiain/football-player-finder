import React from 'react';
import PropTypes from 'prop-types';
import PlayersListRow from "./PlayersListRow";

const PlayersList = ({players}) => {

    return (
        <table className="table table-bordered table-striped table-responsive">
            <thead>
            <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Team</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody className="scrollable">
            {players.map((player, index) =>
                <PlayersListRow key={index} player={player}/>
            )}
            </tbody>
        </table>
    );
};

PlayersList.propTypes = {
    players: PropTypes.array.isRequired
};

export default PlayersList;
