import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/components/TextInput';
import SelectInput from "../../common/components/SelectInput";

const PlayersFilterForm = ({filters, allPositions, onFilter, onChange}) => {

    function alphaOnly(e) {
        const re = /[a-zA-Z]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
    }

    return (
        <div className="row">
            <form className="form-inline">
                <TextInput
                    name="name"
                    label=""
                    value={filters.name}
                    placeholder="Player Name"
                    onChange={onChange}
                    onKeyPress={alphaOnly}/>

                <SelectInput
                    name="position"
                    label=""
                    value={filters.position}
                    defaultOption="Select Position"
                    options={allPositions}
                    onChange={onChange}/>

                <TextInput
                    name="age"
                    label=""
                    value={filters.age}
                    placeholder="Age"
                    onChange={onChange}/>

                <div className="form-group pull-right">
                    <input type="submit" className="btn btn-primary" value="Search"/>
                </div>
            </form>
        </div>
    );
};

PlayersFilterForm.propTypes = {
    // TODO: Add prop types validations here
};

export default PlayersFilterForm;
