import clsx from 'clsx';
import _ from 'lodash';
import React from 'react';


import {
    Box,
    Button as MuiButton,
    Typography,
} from '@mui/material';
import {Stack} from '@mui/system';

import {CircularProgressIndicator} from '../../General';


// -------------------------------------------------------------------------------------------------------
export interface YButtonProps {
    /**
     * The size of the variant
     */
    size: 'small' | 'large';

    /**
     * The variant of the styled
     */
    variant: 'contained' | 'outlined' | 'without-contained';

    /**
     * in loading state
     */
    isLoading?: boolean;

    /**
     * Icon for rendering
     */
    icon?: React.ReactNode;

    /**
     * The children can be only text and is the title of the button
     */
    children?: string | undefined | null;

    /** Disable button */
    disabled?: boolean;

    /** Button click event */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;

    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Set the button in active mode
     */
    isPressed?: boolean;
}
// -------------------------------------------------------------------------------------------------------
export default function YButton({
    isLoading,
    onClick,
    variant,
    size,
    children,
    icon,
    disabled,
    fullWidth,
    isPressed,
}: YButtonProps) {
    const muiVariant = variant === 'contained' ? 'contained' : 'outlined';
    const haveText = !_.isEmpty(children);
    const haveIcon = !_.isNil(icon);

    return (
        <MuiButton
            variant={muiVariant}
            onClick={isLoading ? _.noop : onClick}
            disableElevation
            disableRipple
            disabled={disabled}
            className={clsx({
                isPressed: isPressed,
                disabled: disabled,
            })}
        >
            {isLoading && (
                <Box position="absolute" height="20px">
                    <CircularProgressIndicator
                        variant={
                            variant === 'contained'
                                ? 'smallLight'
                                : 'smallDark'
                        }
                    />
                </Box>
            )}
            <Stack
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: isLoading ? 0 : 1,
                }}
            >
                {haveIcon ? (
                    <Box
                        sx={{
                            height: '24px',
                            width: '24px',
                        }}
                    >
                        {icon}
                    </Box>
                ) : undefined}
                {haveText ? (
                    <Typography variant="button">{children}</Typography>
                ) : undefined}
            </Stack>
        </MuiButton>
    );
}
// -------------------------------------------------------------------------------------------------------
