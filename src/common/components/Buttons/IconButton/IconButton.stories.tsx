import {Meta, Story} from '@storybook/react';

import {BuildingsLargeIcon} from '../../../icons';

import YGreyIconButton, {IconButtonProps} from './IconButton';

export default {
    component: YGreyIconButton,
    title: 'Core/Buttons/IconButton',
    storyName: 'expandable',
    parameters: {
        layout: 'padded',
    },
    args: {
        counter: undefined,
        selected: false,
        tooltip: 'Lorem ipsum dolor sit amet',
        disabled: false,
    },
    argTypes: {
        LinkComponent: {table: {disable: true}},
        TouchRippleProps: {table: {disable: true}},
        action: {table: {disable: true}},
        centerRiple: {table: {disable: true}},
        classes: {table: {disable: true}},
        size: {table: {disable: true}},
        disableFocusRipple: {table: {disable: true}},
        disableRiple: {table: {disable: true}},
        disableTouchRipple: {table: {disable: true}},
        edge: {table: {disable: true}},
        focusRipple: {table: {disable: true}},
        focusVisibleClassName: {table: {disable: true}},
        onFocusVisible: {table: {disable: true}},
        tabIndex: {table: {disable: true}},
        touchRippleRef: {table: {disable: true}},
    },
} as Meta;

const Template: Story<IconButtonProps> = (
    args: IconButtonProps
) => {
    return (
        <YGreyIconButton {...args}>
            <BuildingsLargeIcon />
        </YGreyIconButton>
    );
};

export const Dark = Template.bind({});
Dark.args = {
    variant: 'dark',
    selected: false,
} as IconButtonProps;

export const DarkCounter = Template.bind({});
DarkCounter.args = {
    variant: 'darkCounter',
    selected: false,
    counter: 9,
} as IconButtonProps;

export const DarkIndicator = Template.bind({});
DarkIndicator.args = {
    variant: 'darkIndicator',
    selected: false,
} as IconButtonProps;
