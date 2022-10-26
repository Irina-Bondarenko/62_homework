import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export function CheckBoxes(props) {
    const {
        isNewFilter,
        isInStockFilter,
        isSaleFilter,
        isNewCheckboxHandler,
        isSaleCheckboxHandler,
        isInStockCheckboxHandler,
    } = props;

    const onChangeInStockCheckboxHandler = () => {
        isInStockCheckboxHandler(!isInStockFilter)

    }

    const onChangeIsNewCheckboxHandler = () => {
        isNewCheckboxHandler(!isNewFilter)
    }

    const onChangeIsSaleCheckboxHandler = () => {
        isSaleCheckboxHandler(!isSaleFilter)
    }
    return (
        <FormGroup className={"d-flex"}>
            <FormControlLabel onChange={onChangeInStockCheckboxHandler} checked={isInStockFilter} control={<Checkbox color="success" />} label="IN STOCK" />
            <FormControlLabel onChange={onChangeIsNewCheckboxHandler} checked={isNewFilter} control={<Checkbox color="secondary"/>} label="NEW" />
            <FormControlLabel onChange={onChangeIsSaleCheckboxHandler} checked={isSaleFilter} control={<Checkbox color="default" />} label="SALE" />
        </FormGroup>
    );
}