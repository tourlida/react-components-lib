import {SvgIconComponent} from '@mui/icons-material';
import {Box, SvgIcon, Typography} from '@mui/material';

import YGreyIconButton from '../IconButton/IconButton';

// -------------------------------------------------------------------------------------------------------
export interface IconButtonWithTextProps {
    direction: 'row' | 'row-reverse';
    icon: SvgIconComponent;
    label: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

// -------------------------------------------------------------------------------------------------------
function IconButtonWithText({
    direction,
    icon,
    label,
    onClick,
}: IconButtonWithTextProps) {
    //TODO: States need to be declared from the UI we also need to re-think the fact that
    //click event is applied only in the iconButton and not in all the area that contains also the label.
    return (
        <Box
            alignItems="center"
            display="inline-flex"
            flexDirection={direction}
            gap="1"
        >
            <YGreyIconButton variant="dark" onClick={onClick}>
                <SvgIcon component={icon} />
            </YGreyIconButton>
            <Typography
                component="div"
                variant="body2"
                sx={{
                    mr: direction === 'row-reverse' ? '4px' : '12px',
                    ml: direction === 'row' ? '4px' : 2,
                    color: 'grey.900',
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}

// -------------------------------------------------------------------------------------------------------
export default IconButtonWithText;
