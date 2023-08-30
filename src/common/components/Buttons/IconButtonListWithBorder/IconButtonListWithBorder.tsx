import _ from 'lodash';

import {Divider, Stack} from '@mui/material';

import {IconButton} from '../index';

import {IconButtonProps} from '../IconButton/IconButton';

export interface IconButtonListWithBorderProps {
    buttons: IconButtonProps[];
    disabled?: boolean;
    fitBorder?: boolean;
}

const IconButtonListWithBorder = ({
    buttons,
    disabled,
    fitBorder = true,
}: IconButtonListWithBorderProps) => {
    return (
        <Stack
            data-testid="multiple-actions-section"
            direction="row"
            divider={
                <Divider
                    orientation="vertical"
                    sx={{
                        height: '30px',
                        alignSelf: 'center',
                        borderColor: 'grey.300',
                    }}
                    flexItem
                />
            }
            sx={{
                width: 'fit-content',
                bgcolor: 'grey.100',
                border: '1px solid',
                borderColor:  'grey.400',
                borderRadius: '4px',
                '&:hover,&:focus,&:active': {
                    borderColor: !disabled ? 'grey.600' : null,
                },
                alignSelf: 'center',
            }}
        >
            {_.map(buttons, ({children, ...otherBtnProps}, idx) => {
                return (
                    <IconButton
                        key={idx}
                        disabled={disabled}
                        fitBorder={fitBorder}
                        {...otherBtnProps}
                    >
                        {children}
                    </IconButton>
                );
            })}
        </Stack>
    );
};

export default IconButtonListWithBorder;
