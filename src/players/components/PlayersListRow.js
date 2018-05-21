import React from 'react';
import PropTypes from 'prop-types';

const PlayersListRow = ({player}) => {
    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.position}</td>
            <td>{player.team}</td>
            <td>{player.age}</td>

        </tr>
    );
};

PlayersListRow.propTypes = {
    player: PropTypes.object.isRequired
};

export default PlayersListRow;
