// -------------------------------------------------------------------------------------------------------
import EllipsisTooltip from '../../General/EllipsisTooltip/EllipsisTooltip';

import YContentTemplate from '../ContentTemplate';
import {TypographyOverline} from '../Typography';

// -------------------------------------------------------------------------------------------------------
export interface YContentTextProps {
    title?: string;
    label: string;

    /**
     * Define whitespace style of the text
     * @default: nowrap
     */
    whiteSpace?: 'normal' | 'nowrap';

    /**
     * The **`text-align`** CSS property sets the horizontal alignment of the content inside a
     * block element or table-cell box. This means it works like `vertical-align` but in
     * the horizontal direction.
     *
     */
    textAlign?: 'center' | 'end' | 'justify' | 'left' | 'match-parent' | 'right' | 'start';

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
    /**
     * Show a vertical divider on the left of the content
     * @default: false
     */
    showDivider?: boolean;
}
// -------------------------------------------------------------------------------------------------------
export default function YContentText({
    label,
    title,
    whiteSpace,
    textAlign,
    removeDivider,
    tightTemplate,
    showDivider,
}: YContentTextProps) {
    return (
        <YContentTemplate
            title={title}
            removeDivider={removeDivider}
            tightTemplate={tightTemplate}
            showDivider={showDivider}
        >
            <EllipsisTooltip label={label}>
                <TypographyOverline
                    style={{
                        whiteSpace: whiteSpace ?? 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        textAlign: textAlign,
                    }}
                >
                    {label}
                </TypographyOverline>
            </EllipsisTooltip>
        </YContentTemplate>
    );
}

// -------------------------------------------------------------------------------------------------------
