import {Meta, Story} from '@storybook/react';

import {Box} from '@mui/system';

import Counter, {CounterProps} from './Counter';

const Template: Story<CounterProps> = (args: CounterProps) => {
    return <Counter {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    value: 101,
} as CounterProps;

export default {
    component: Default,
    title: 'Core/General/Counter',
    storyName: 'Counter',
    parameters: {
        layout: 'padded',
    },
    decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta;
