import {Meta, Story} from '@storybook/react';

import {Box, Typography} from '@mui/material';

import EllipsisTooltip, {EllipsisTooltipProps} from './EllipsisTooltip';

const longText = 'Lorem ipsum dolor sit amet.';

const Template = (): Story<EllipsisTooltipProps> => (args) => {
    return (
        <Box sx={{width: 100, display: 'inline-block', mb: 20}}>
            <EllipsisTooltip {...args}>
                <Typography
                    variant="body2"
                    color="grey.900"
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: 'inherit',
                    }}
                >
                    {longText}
                </Typography>
            </EllipsisTooltip>
        </Box>
    );
};

export default {
    component: EllipsisTooltip,
    title: 'Core/General/EllipsisTooltip',
    storyName: 'YEllipsisTooltip',
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'grey',
            values: [{name: 'grey', value: '#F9F9F9'}],
        },
    },
} as Meta;

export const Default = Template().bind({});
Default.args = {
    label: longText,
};
