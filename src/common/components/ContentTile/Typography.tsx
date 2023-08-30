import _ from 'lodash';
import {forwardRef} from 'react';

import {styled} from '@mui/material';

export interface TypographyProps {
    color?: string;
    style?: React.CSSProperties;
    children?: string;
}

/**
 * The tooltip needs to apply DOM event listeners to its child element.
 * If the child is a custom React element (as Typographies below), you need to make sure that it spreads its props to the underlying DOM element.
 * https://mui.com/material-ui/react-tooltip/#custom-child-element
 */
// -------------------------------------------------------------------------------------------------------
export const TypographyOverlineStyled = styled('div')(
    `
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-transform: none;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 0;
    `
);
export const TypographyOverline = forwardRef(
    (props: TypographyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {children, style, color, ...other} = props;

        return (
            <TypographyOverlineStyled
                style={{...style, color: color}}
                ref={ref}
                {...other}
            >
                {children}
            </TypographyOverlineStyled>
        );
    }
);
TypographyOverline.displayName = 'YTypographyOverline';
// -------------------------------------------------------------------------------------------------------
export const TypographyBody2Styled = styled('div')(
    `
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 0;
    `
);
export const TypographyBody2 = forwardRef(
    (props: TypographyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {children, style, color, ...other} = props;
        return (
            <TypographyBody2Styled style={{...style, color: color}} ref={ref} {...other}>
                {children}
            </TypographyBody2Styled>
        );
    }
);
TypographyBody2.displayName = 'YTypographyBody2';
// -------------------------------------------------------------------------------------------------------
export const TypographyMenuStyled = styled('div')(
    `
    margin: 0;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 0;
    `
);
export const YTypographyMenu = forwardRef(
    (props: TypographyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {children, style, color, ...other} = props;
        return (
            <TypographyMenuStyled style={{...style, color: color}} ref={ref} {...other}>
                {children}
            </TypographyMenuStyled>
        );
    }
);
YTypographyMenu.displayName = 'YTypographyMenu';
// -------------------------------------------------------------------------------------------------------
export const YTypographySubtitleStyled = styled('div')(
    `
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 0;
    `
);
export const TypographySubtitle = forwardRef(
    (props: TypographyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {children, style, color, ...other} = props;
        return (
            <YTypographySubtitleStyled
                style={{...style, color: color}}
                ref={ref}
                {...other}
            >
                {children}
            </YTypographySubtitleStyled>
        );
    }
);
TypographySubtitle.displayName = 'YTypographySubtitle';
// -------------------------------------------------------------------------------------------------------
export const TypographyButtonStyled = styled('div')(
    `
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    letter-spacing: 0;
    `
);
export const TypographyButton = forwardRef(
    (props: TypographyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {children, style, color, ...other} = props;
        return (
            <TypographyButtonStyled
                style={{...style, color: color}}
                ref={ref}
                {...other}
            >
                {children}
            </TypographyButtonStyled>
        );
    }
);
TypographyButton.displayName = 'TypographyButton';
// -------------------------------------------------------------------------------------------------------
