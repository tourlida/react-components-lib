
import {Link as MuiLink, SxProps, Typography} from '@mui/material';

export interface LinkProps {
    label:  string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    sx?: SxProps;
}

export default function Link({label, disabled, sx, onClick}: LinkProps) {
    return (
        <MuiLink
            onClick={onClick}
            underline="none"
            component="button"
            disabled={disabled}
            sx={{
                '&:hover,&:focus,&:active': {
                    textDecoration: 'underline',
                },
                '&:disabled': {
                    color: 'common.disabled',
                    textDecoration: 'none',
                    pointerEvents: 'none',
                },
                ...sx,
            }}
        >
            <Typography
                component="div"
                variant="caption"
                fontWeight={500}
                overflow="clip"
                textOverflow="ellipsis"
            >
                {label}
            </Typography>
        </MuiLink>
    );
}
