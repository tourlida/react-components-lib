import { Meta, Story } from '@storybook/react';
import { YFileViewer, YFileViewerProps, eContentType } from './FileViewer';
import { Box } from '@mui/material';

const Template: Story<YFileViewerProps> = (args) => {
    return <YFileViewer {...args} />;
};

export const ImageViewer = Template.bind({});
export const PdfViewer = Template.bind({});

ImageViewer.args = {
    type: eContentType.Image,
    getFileUrl: 'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
};

PdfViewer.args = {
    type: eContentType.Pdf,
    getFileUrl: 'https://www.sas.upenn.edu/~fdiebold/Teaching221/fcst5-Slides.pdf'
};


export const NotSupportedViewer = Template.bind({});
NotSupportedViewer.args = {
    type: eContentType.ExternalLink,
    getFileUrl: 'https://s3.eu-central-1.amazonaws.com/yodiwo.yodifem.devbucket/LOCAL-1-3d93ea1f-979c-4cb8-bba0-fd4f46a98134?X-Amz-Expires=604800&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2EOOCK4OIJH727UV/20221201/eu-central-1/s3/aws4_request&X-Amz-Date=20221201T112048Z&X-Amz-SignedHeaders=host&X-Amz-Signature=eeaba9ddfbd34068c6b520f052f152dc08b11f776d823125c732482d376cdb4d'
};

export default {
    component: YFileViewer,
    title: 'Core/FileViewer',
    decorators: [(Story) => <Box width={600} height={600}>{Story()}</Box>],
} as Meta;
