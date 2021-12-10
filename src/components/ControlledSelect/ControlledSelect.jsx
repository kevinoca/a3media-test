import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 300
    },
    select: {
        background: "white",
        margin: 20
    }
}))

export default function ControlledSelect({ options, onChange: getDogBreedImages, isDisabled }) {

    const classes = useStyles();

    const [inputValue, setInputValue] = useState("")

    function onChangeHandler(event) {
        const { value } = event.target
        setInputValue(value)
        getDogBreedImages(value)
    }

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                className={classes.select}
                id="breed-select"
                name="breed-select"
                labelId="breed-select-label"
                value={inputValue}
                onChange={onChangeHandler}
                disabled={isDisabled}
            >
                {options && options.length > 0 && options.map((dogBreed, key) => <MenuItem key={key} value={dogBreed} selected={inputValue === dogBreed}>{dogBreed}</MenuItem>)}
            </Select>
        </FormControl>
    )

}

ControlledSelect.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}