import React from 'react';
import PropTypes from 'prop-types';
import LoadingDots from './LoadingDots'

const Header = ({loading}) => {

    return (
        <h1 className="title">Football Player Finder&nbsp;{loading && <LoadingDots interval={100} dots={20}/>}</h1>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
