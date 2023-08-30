import * as icons from '../../../icons';

import {ComponentMeta, ComponentStory} from '@storybook/react';

import IconButtonWithText from './IconButtonWithText';

export default {
    title: 'Core/Buttons/IconButtonWithText',
    component: IconButtonWithText,
    parameters: {
        layout: 'padded',
    },
    args: {
        direction: 'row',
        icon: icons.BuildingsLargeIcon,
    },
} as ComponentMeta<typeof IconButtonWithText>;

const Template: ComponentStory<typeof IconButtonWithText> = (args) => (
    <IconButtonWithText {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
};
