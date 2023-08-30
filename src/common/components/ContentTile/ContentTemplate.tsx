import _ from 'lodash';
import React from 'react';

import {styled} from '@mui/material';

import {YTypographyMenu} from './Typography';

// -------------------------------------------------------------------------------------------------------
export interface YContentTemplateProps {
    /**
     * Title of the content if is null the body is returned
     */
    title?: string;

    /**
     *  Body of the content.
     */
    children?: React.ReactChild;

    /**
     * Show divider in the start of the content.
     * Valid only when we have title;
     */
    showDivider?: boolean;

    /**
     * We can remove the divider in the case that we don't need the 13px space in the start.
     * @default: false
     */
    removeDivider?: boolean;

    /**
     * Reduce the distance between header and body.
     * This is valid when we have title
     * @default: false
     */
    tightTemplate?: boolean;
}
// -------------------------------------------------------------------------------------------------------
const TemplateStack = styled('div')(`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    text-align: left;
    justify-content: center;
    flex: 1;
    min-width: 0;
`);
const ChildStack14 = styled('div')(`
    display: flex;
    height: 14px;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
`);
const ChildStack24 = styled('div')(`
display: flex;
height: 24px;
align-content: center;
justify-content: flex-start;
align-items: center;
`);
const BoxDividerParent = styled('div')(`
    display: flex;
    width: 13px;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
`);
const BoxDividerChild = styled('div')(`
    width: 1px;
    height: 32px;
`);
const ParentTemplateStack = styled('div')(`
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 100%;
    text-align: left;
    justify-content: center;
`);
// -------------------------------------------------------------------------------------------------------
export default function YContentTemplate({
    title,
    children,
    showDivider,
    removeDivider,
    tightTemplate,
}: YContentTemplateProps) {
    if (_.isNil(title)) {
        return <>{children}</>;
    }

    if (removeDivider === true) {
        return (
            <ParentTemplateStack>
                <TemplateStack>
                    <YTypographyMenu style={{display: 'flex'}} color="grey.600">
                        {title}
                    </YTypographyMenu>
                    {tightTemplate ? (
                        <ChildStack14>{children}</ChildStack14>
                    ) : (
                        <ChildStack24>{children}</ChildStack24>
                    )}
                </TemplateStack>
            </ParentTemplateStack>
        );
    }

    return (
        <ParentTemplateStack>
            <BoxDividerParent>
                <BoxDividerChild
                    sx={{
                        backgroundColor: showDivider ? 'grey.300' : 'transparent',
                    }}
                ></BoxDividerChild>
            </BoxDividerParent>
            <TemplateStack>
                <YTypographyMenu style={{display: 'flex'}} color="grey.600">
                    {title}
                </YTypographyMenu>
                {tightTemplate ? (
                    <ChildStack14>{children}</ChildStack14>
                ) : (
                    <ChildStack24>{children}</ChildStack24>
                )}
            </TemplateStack>
        </ParentTemplateStack>
    );
}

// -------------------------------------------------------------------------------------------------------
