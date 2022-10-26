import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

const minDistance = 10;

export function SliderPrice(props) {
    const [value, setValue] = React.useState([0, 37]);
    const { priceHandler } = props



    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }

        priceHandler(value);
    };


    return (
        <Box sx={{ width: 700, margin: '0 auto'}}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                min={0}
                // step={50}
                max={1000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="secondary"
                disableSwap
            />
        </Box>
    );
}
