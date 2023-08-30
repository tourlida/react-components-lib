
import { Meta, Story } from '@storybook/react';
import CircularProgressIndicator, {
    CircularProgressIndicatorProps,
} from './index';

const Template: Story<CircularProgressIndicatorProps> = (args) => {
    return (
        <CircularProgressIndicator {...args}></CircularProgressIndicator>
    );
};

export const Large = Template.bind({});
export const SmallLight = Template.bind({});
export const SmallDark = Template.bind({});

Large.args = {
    variant: 'large',
};
SmallLight.args = {
    variant: 'smallLight',
};
SmallDark.args = {
    variant: 'smallDark',
};

export default {
    component: Large,
    title: 'Core/General/Loaders/CircularProgressIndicator',
    argTypes: {
        variant: {
            options: ['smallDark', 'smallLight', 'large'],
            control: {type: 'select'},
        },
    },
    parameters: {
        layout: 'centered',
    },
} as Meta;
