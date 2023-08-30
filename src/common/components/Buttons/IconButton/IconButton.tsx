import clsx from 'clsx';

import {Box, Skeleton, Tooltip, TooltipProps} from '@mui/material';
import {IconButton} from '@mui/material';

import {Counter} from '../../General';

import { MouseEventHandler } from 'react';

// -------------------------------------------------------------------------------------------------------
export interface IconButtonProps {
    children?: React.ReactNode;
    counter?: number;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
    tooltip?: string;
    tooltipProps?: TooltipProps;
    loading?: boolean;

    /**
     * Set the button in active mode
     */
    isPressed?: boolean;
    variant: 'dark' | 'darkCounter' | 'darkIndicator';

    /**
     * Remove one pixel from each button's side, so as an external border would not change the predefined size
     */
    fitBorder?: boolean;
}
// -------------------------------------------------------------------------------------------------------
const darkIconButtonSxProps = {
    width: '32px',
    height: '32px',
    color: 'grey.600',
    '&:focus': {
        color: 'grey.600',
        backgroundColor: 'common.light.focus',
    },
    '&:hover': {
        color: 'grey.600',
        backgroundColor: 'common.light.hover',
    },
    '&.isPressed,&:active': {
        backgroundColor: 'common.light.pressed',
        color: 'grey.600',
    },
    '&.Mui-disabled': {
        color: 'common.disabled',
    },
    '&.isSelected': {
        color: 'grey.100',
        backgroundColor: 'grey.600',
        '&:hover': {
            color: 'grey.100',
            backgroundColor: 'grey.600',
        },
    },
};
// -------------------------------------------------------------------------------------------------------
function YGreyIconButton({
    children,
    counter = 0,
    disabled,
    onClick,
    selected,
    tooltip,
    tooltipProps,
    variant,
    isPressed,
    fitBorder,
    loading,
}: IconButtonProps) {
    if (loading) {
        return <Skeleton variant="circular" width="32px" height="32px" sx={{m: '4px'}} />;
    }
    return (
        <Tooltip title={tooltip ?? ''} arrow enterDelay={500} {...tooltipProps}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    height: fitBorder ? '38px' : '40px',
                    justifyContent: 'center',
                    position: 'relative',
                    width: fitBorder ? '38px' : '40px',
                }}
            >
                <IconButton
                    onClick={onClick}
                    onBlur={(ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }}
                    disabled={disabled}
                    className={clsx({
                        isSelected: selected ?? false,
                        isPressed: isPressed,
                    })}
                    sx={darkIconButtonSxProps}
                >
                    {children}
                </IconButton>
                {variant === 'darkIndicator' ? (
                    <Box
                        sx={{
                            bgcolor: 'secondary.main',
                            borderRadius: '100px',
                            height: '8px',
                            position: 'absolute',
                            right: '10%',
                            top: '10%',
                            width: '8px',
                        }}
                    />
                ) : null}
                {variant === 'darkCounter' && counter > 0 ? (
                    <Counter
                        value={counter}
                        style={{
                            position: 'absolute',
                            right: '2px',
                            top: '2px',
                        }}
                    />
                ) : null}
            </Box>
        </Tooltip>
    );
}
// -------------------------------------------------------------------------------------------------------
export default YGreyIconButton;
