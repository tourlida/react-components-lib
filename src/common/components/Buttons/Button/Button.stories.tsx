import {action} from '@storybook/addon-actions';

import {Box, Stack} from '@mui/material';

import {AddFloorIcon} from '../../../icons';

import YButton, {YButtonProps} from './Button';
import { Meta, Story } from '@storybook/react';

const Template = (): Story<YButtonProps> => (args) => {
    return (
        <Box>
            Large:
            <Stack sx={{m: 2, gap: 1, flexDirection: 'row'}}>
                <YButton {...args} size="large" onClick={action('large-text')}>
                    Big
                </YButton>
                <YButton
                    {...args}
                    size="large"
                    icon={<AddFloorIcon />}
                    onClick={action('large-text-icon')}
                >
                    Big
                </YButton>
                <YButton
                    {...args}
                    size="large"
                    icon={<AddFloorIcon />}
                    onClick={action('large-icon')}
                />
            </Stack>
            Small:
            <Stack sx={{m: 2, gap: 1, flexDirection: 'row'}}>
                <YButton {...args} size="small" onClick={action('small-text')}>
                    Small
                </YButton>
                <YButton
                    {...args}
                    size="small"
                    icon={<AddFloorIcon />}
                    onClick={action('small-text-icon')}
                >
                    Small
                </YButton>
                <YButton
                    {...args}
                    size="small"
                    icon={<AddFloorIcon />}
                    onClick={action('small-icon')}
                />
            </Stack>
        </Box>
    );
};

export const Contained = Template().bind({});
Contained.args = {
    variant: 'contained',
    disabled: false,
    isLoading: false,
};

export const Outlined = Template().bind({});
Outlined.args = {
    variant: 'outlined',
    disabled: false,
    isLoading: false,
};

export const WithoutContained = Template().bind({});
WithoutContained.args = {
    variant: 'without-contained',
    disabled: false,
    isLoading: false,
};

export default {
    component: YButton,
    title: 'Core/Buttons/YButton',
    storyName: 'Button',
    argTypes: {
        variant: {
            options: ['contained', 'outlined', 'without-contained'],
            control: {type: 'select'},
        },
        size: {
            options: ['small', 'large'],
            control: {type: 'select'},
        },
    },
} as Meta;
