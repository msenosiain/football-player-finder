import React from 'react';
import PropTypes from 'prop-types';

const PlayersListRow = ({player}) => {

    const age = (player) => {
        let now = new Date();
        let birthday = new Date(player.dateOfBirth);
        let diff = now - birthday;
        return Math.floor(diff / 31557600000);
    };

    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.team}</td>
            <td>{age(player)}</td>

        </tr>
    );
};

PlayersListRow.propTypes = {
    player: PropTypes.object.isRequired
};

export default PlayersListRow;
