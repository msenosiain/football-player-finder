import React from 'react';
import TextInput from '../../common/components/TextInput';
import SelectInput from "../../common/components/SelectInput";

const PlayersFilterForm = ({filters, allPositions, onFilter, onChange}) => {

    function alphaOnly(e) {
        const re = /[A-Za-zÀ-ÿ ]+/g;
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

                <input
                    title="Click (or press ⏎) to search"
                    type="submit"
                    className="btn btn-primary pull-right"
                    value="Search ⏎"
                onClick={onFilter}/>
            </form>
        </div>
    );
};

PlayersFilterForm.propTypes = {
    // TODO: Add prop types validations here
};

export default PlayersFilterForm;
