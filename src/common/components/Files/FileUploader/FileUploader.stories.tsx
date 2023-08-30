import {Meta, Story} from '@storybook/react';

import {Box} from '@mui/material';

import {FloorplanFileIcon} from '../../../icons';

import YFileUploader, {YFileUploaderProps} from './FileUploader';
import { eContentType } from '../FileViewer/FileViewer';

const Template: Story<YFileUploaderProps> = (args) => {
    return <YFileUploader {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    uploadUrl:'https://dummy url',
    maxAllowedSize: 10,
    supportedTypes: [eContentType.Image],
    dragAndDropInfoLabel: 'Drag and drop image here',
    browseInfoLabel: 'Browse image',
    errorMsg: 'Image has not been uploaded. Try to select an image again.',
    loadingIcon: FloorplanFileIcon,
};

export default {
    component: YFileUploader,
    title: 'Core/FileUploader',
    decorators: [(Story) => <Box width={800}>{Story()}</Box>],
} as Meta;
