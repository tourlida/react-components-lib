import { Meta, Story } from '@storybook/react';

import { Box } from '@mui/system';

import InlineMessage, { InlineMessageProps } from './InlineMessage';

const Template: Story<InlineMessageProps> = (args: InlineMessageProps) => {
    return <InlineMessage {...args} />;
};

export const InfoMsg = Template.bind({});
InfoMsg.args = {
    label: 'The City ID has been defined by the system and it can be adjusted',
    variant: 'info'
} as InlineMessageProps;

export const ErrorMsg = Template.bind({});

ErrorMsg.args = {
    label: 'The City ID has been defined by the system and it can be adjusted',
    variant: 'error'
} as InlineMessageProps;

export default {
    component: InfoMsg,
    title: 'Core/General/InlineMessage',
    storyName: 'InlineMessage',
    parameters: {
        layout: 'padded',
    },
    decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta;
