import _ from 'lodash';
import {useCallback, useEffect, useState} from 'react';

import {Stack, Typography} from '@mui/material';

//import MarkdownViewer from '../../components/MarkdownViewer';
import {NoPreviewIcon} from '../../../icons';

export enum eContentType {
    Text = 0,
    Image = 1,
    Pdf = 2,
    OfficeDocument = 3,
    VectorGraphics = 4,
    Bin = 5,
    Zip = 6,
    Md = 7,
    ExternalLink = 8,
    None = 9,
}
//--------------------------------------------------------------------------------------------------------
export interface YFileViewerProps {
    /**
     * Define filetype in order to render different previewer
     */
    type?: eContentType;

    /**
     * Define get ur lfrom which we will retrieve the actual src of the file
     */
    getFileUrl?: string | null;

    /**
     * Define if we want to have a full screen button on it
     */
    showFullScreenButton?: boolean;
}
// -------------------------------------------------------------------------------------------------------

export function YFileViewer({type, getFileUrl}: YFileViewerProps) {
    const [fileSrc, setFileSrc] = useState<string | undefined>();
    const [hasError, setError] = useState<boolean>(false);

    /**
     * Fetch the actual file and update state
     */
    const fetchFile = useCallback(
        async (url: string) => {
            try {
                if (type === eContentType.Image) {
                    await fetch(url, {
                        method: 'GET',
                    }).then((data) => {
                        setFileSrc(_.toString(data.url));
                    });
                } else if (type === eContentType.Pdf) {
                    await fetch(url, {
                        method: 'GET',
                    }).then(async (res) => {
                        const blob = await res.blob();
                        const newBlob = new Blob([blob], {type: 'application/pdf'});

                        const blobUrl = window.URL.createObjectURL(newBlob);
                        setFileSrc(blobUrl);
                    });
                } else {
                    setFileSrc(url);
                }
                setError(false);
            } catch {
                setError(true);
            }
        },
        [type]
    );

    useEffect(() => {
        if (!_.isNil(getFileUrl)) {
            fetchFile(getFileUrl);
        }
    }, [getFileUrl, fetchFile]);

    const notSupportedViewerElement = (
        <Stack
            style={{
                width: 'inherit',
                height: 'inherit',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <NoPreviewIcon
                sx={{
                    height: '80px',
                    width: '80px',
                    color: 'common.disabled',
                }}
                viewBox="0 0 80 80"
                fill="none"
            />
            <Typography component="div" variant="body2" sx={{mt: 3}}>
                Preview is not supported
            </Typography>
        </Stack>
    );

    let mainComponent = null;
    switch (type) {
        case eContentType.Image:
            mainComponent = (
                <img src={fileSrc} alt="" style={{width: 'inherit', height: 'inherit'}} />
            );
            break;
        case eContentType.Pdf:
            mainComponent = (
                <object
                    title="pdf"
                    data={fileSrc}
                    style={{width: 'inherit', height: 'inherit'}}
                    type="application/pdf"
                >
                    <p>
                        Your browser does not support PDF files.&nbsp;
                        <a href={getFileUrl ?? ''}>Download the file instead.</a>
                    </p>
                </object>
            );
            break;
        case eContentType.Md:
            mainComponent = (
                null
               /* <MarkdownViewer
                    content={fileSrc ?? ''}
                    supportGithubBreaks={false}
                    onError={_.noop}
                />*/
            );
            break;
        case eContentType.OfficeDocument:
        case eContentType.Text:
        case eContentType.VectorGraphics:
        case eContentType.Bin:
        case eContentType.Zip:
        default:
            //todo add missing viewers
            mainComponent = notSupportedViewerElement;
            break;
    }

    return (
        <div style={{width: '100%', height: '100%'}}>
            {!hasError ? mainComponent : notSupportedViewerElement}
        </div>
    );
}
// -------------------------------------------------------------------------------------------------------

export function isYFileViewerSupported(type?: eContentType | null) {
    switch (type) {
        case eContentType.Image:
        case eContentType.Pdf:
        case eContentType.Md:
            return true;
        default:
            return false;
    }
}
// -------------------------------------------------------------------------------------------------------
