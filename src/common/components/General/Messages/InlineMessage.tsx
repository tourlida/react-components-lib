import { Box, Typography } from '@mui/material';
import { ErrorLargeIcon, InfoLargeIcon } from '../../../icons';

// -------------------------------------------------------------------------------------------------------
export interface InlineMessageProps {
    label: string;
    variant: 'error' | 'info';
}
// -------------------------------------------------------------------------------------------------------
export default function InlineMessage({ label, variant }: InlineMessageProps) {
    return (
        <Box
            bgcolor={variant === 'error' ? "#ffbaba" : "#f7ede2"}
            px="8px"
            py="4px"
            display="flex"
            gap="4px"
            width="100%"
            alignItems="center"
            borderRadius="4px"
        >
            {variant === 'error' ? <ErrorLargeIcon
                sx={{
                    color: '#ff0000',
                }}
            />
                : <InfoLargeIcon sx={{
                    color: '#f6bd60',
                }} />}
            <Typography color='grey.900' variant="body2" component='div' sx={{ width: 'calc(100% - 16px)', margin: 'auto', wordBreak: 'break-word' }}>
                {label}
            </Typography>
        </Box>
    );
}
// -------------------------------------------------------------------------------------------------------
