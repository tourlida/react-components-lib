import {useMemo} from 'react';

import {Box, CircularProgress} from '@mui/material';


export interface CircularProgressIndicatorProps {
    variant: 'large' | 'smallLight' | 'smallDark' | 'auto';
}

//-------------------------------------------------------------------------------------------------
function CircularProgressIndicator({variant}: CircularProgressIndicatorProps) {
    const size = useMemo(() => {
        switch (variant) {
            case 'large':
                return '48px';
            case 'smallLight':
            case 'smallDark':
                return '20px';
            case 'auto':
                return undefined;
        }
    }, [variant]);
    return (
        <>
            <svg height="0px" width="0px">
                <defs>
                    <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="100%">
                        <stop
                            offset="0%"
                            stopColor={
                                variant === 'smallLight' ? `grey` : 'white'
                            }
                        />
                        <stop
                            offset={variant === 'smallLight' ? '50%' : '100%'}
                            stopColor={variant === 'smallLight' ? 'white' : 'black'}
                        />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress
                size={size}
                sx={{
                    'svg circle': {
                        stroke: 'url(#gradient)',
                    },
                }}
            />
        </>
    );
}

export default CircularProgressIndicator;

//-------------------------------------------------------------------------------------------------
export function CircularProgressIndicatorWrapper({
    variant,
}: Partial<CircularProgressIndicatorProps>) {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgressIndicator variant={variant ?? 'auto'} />
        </Box>
    );
}

//-------------------------------------------------------------------------------------------------
