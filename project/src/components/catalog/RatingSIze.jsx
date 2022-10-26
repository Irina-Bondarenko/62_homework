import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export function RatingSIze(props) {
    const { ratingHandler, ratingFilter } = props;

    const ratingChangeHandler = ({target}) => {
        const ratingValue = parseFloat(target.value)*20;
        ratingHandler(ratingValue)

    }
    return (
        <Stack spacing={1}>
            <Rating onChange={ratingChangeHandler} name="size-medium" defaultValue={2} />
        </Stack>
    );
}
