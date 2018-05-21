import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, onKeyPress, placeholder, value}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>

            <input
                type="text"
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}/>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;
