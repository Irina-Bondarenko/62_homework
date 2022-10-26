import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export function RatingSIze(props) {
    const { ratingValue } = props;

    const ratingChangeHandler = ({target}) => {
        ratingValue(target.value)

    }
    return (
        <Stack spacing={1}>
            <Rating onChange={ratingChangeHandler} name="size-medium" defaultValue={2} />
        </Stack>
    );
}
