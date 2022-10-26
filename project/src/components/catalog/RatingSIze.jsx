import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export function RatingSIze() {
    return (
        <Stack spacing={1}>

            <Rating name="size-medium" defaultValue={2} />

        </Stack>
    );
}
