import {action} from '@storybook/addon-actions';
import _ from 'lodash';

import {DeleteIcon, EditIcon, MoreIcon} from '../../../icons';

import {IconButtonProps} from '../IconButton/IconButton';
import IconButtonListWithBorder, {
    IconButtonListWithBorderProps,
} from './YIconButtonListWithBorder';
import { Meta, Story } from '@storybook/react';

const icons = [<EditIcon />, <DeleteIcon />, <MoreIcon />] as React.ReactNode[];

const BUTTONS: IconButtonProps[] = _.map(icons, (icon, i) => {
    return {
        children: icon,
        variant: 'dark',
        onClick: action(`button-${i}`),
    };
});

export default {
    component: IconButtonListWithBorder,
    storyName: 'YIconButtonListWithBorder',
    title: 'Core/Buttons/YIconButtonListWithBorder',
    parameters: {
        backgrounds: {
            default: 'grey',
            values: [{name: 'grey', value: '#F9F9F9'}],
        },
    },
} as Meta;

const Template: Story<IconButtonListWithBorderProps> = (
    props: IconButtonListWithBorderProps
) => {
    return <IconButtonListWithBorder {...props} />;
};

export const TwoActionsButton = Template.bind({});
TwoActionsButton.args = {buttons: [BUTTONS[0], BUTTONS[1]]};

export const ThreeActionsButton = Template.bind({});
ThreeActionsButton.args = {buttons: BUTTONS};

export const Disabled = Template.bind({});
Disabled.args = {buttons: BUTTONS, disabled: true};
