import {Box, Skeleton} from '@mui/material';

// -------------------------------------------------------------------------------------------------------
export default function YContentSkeleton() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                marginLeft: 1,
                marginBottom: 2,
                height: '40px',
            }}
        >
            <Skeleton
                variant="text"
                sx={{
                    height: '14px',
                }}
            />
            <Skeleton
                variant="text"
                sx={{
                    height: '16px',
                }}
            />
        </Box>
    );
}
// -------------------------------------------------------------------------------------------------------
