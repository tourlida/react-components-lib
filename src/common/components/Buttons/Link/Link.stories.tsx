import {Meta, Story} from '@storybook/react';

import {Box} from '@mui/system';

import Link, {LinkProps} from './Link';

const Template: Story<LinkProps> = (args: LinkProps) => {
    return <Link {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'test',
} as LinkProps;

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
} as LinkProps;

export const Hovered = Template.bind({});
Hovered.args = {
    ...Default.args,
};
Hovered.parameters = {pseudo: {hover: true}};

export default {
    component: Link,
    title: 'Core/Buttons/Link',
    storyName: 'expandable',
    parameters: {
        layout: 'padded',
    },
    decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta;
