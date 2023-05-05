import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Url from '../Url/url';


function List({urlList}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Url urlList={urlList}/>
            </Stack>
        </Box>
    );
}

export default React.memo(List);