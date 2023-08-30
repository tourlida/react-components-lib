import {Meta, Story} from '@storybook/react';

import {Box} from '@mui/material';

import YContentIndicator, {
    YContentIndicatorProps,
} from './YContentIndicator';

const Template: Story<YContentIndicatorProps> = (
    args: YContentIndicatorProps
) => {
    return <YContentIndicator {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    color: '#FF7000',
    label: 'test',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    ...Default.args,
    title: 'title',
};

export default {
    component: Default,
    title: 'Core/ContentTile/Indicator',
    storyName: 'Content Tile',
    decorators: [
        (Story) => (
            <Box
                sx={{
                    m: 2,
                    p: 0,
                    border: '1px solid black',
                    width: '88px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {Story()}
            </Box>
        ),
    ],
} as Meta;
