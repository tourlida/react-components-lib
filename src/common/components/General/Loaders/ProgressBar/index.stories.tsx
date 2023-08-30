
import {Box} from '@mui/system';

import ProgressBar, {ProgressBarProps} from './index';
import { Meta, Story } from '@storybook/react';

const Template: Story<ProgressBarProps> = (args) => {
    return <ProgressBar {...args}></ProgressBar>;
};

export const Default = Template.bind({});

Default.args = {
    value: 30,
};

export default {
    component: Default,
    title: 'Core/General/Loaders/ProgressBar',
    parameters: {
        layout: 'padded',
    },
    decorators: [(Story) => <Box width={800}>{Story()}</Box>],
} as Meta;
