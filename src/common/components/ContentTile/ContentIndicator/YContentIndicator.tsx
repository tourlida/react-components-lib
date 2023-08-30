// -------------------------------------------------------------------------------------------------------
import _ from 'lodash';

import {useTheme} from '@mui/material';

import YContentTemplate from '../ContentTemplate';
import {TypographyOverline} from '../Typography';
import './YContentIndicator.scss';

// -------------------------------------------------------------------------------------------------------
export interface YContentIndicatorProps {
    color: string;
    label: string;
    title?: string;
    removeDivider?: boolean;
    tightTemplate?: boolean;
    showDivider?: boolean;
}
// -------------------------------------------------------------------------------------------------------
export default function YContentIndicator({
    color,
    label,
    title,
    removeDivider,
    tightTemplate,
    showDivider,
}: YContentIndicatorProps) {
    const {palette} = useTheme();
    const dotColor = (color ? _.get(palette, color) : null) ?? color;

    return (
        <YContentTemplate
            title={title}
            removeDivider={removeDivider}
            tightTemplate={tightTemplate}
            showDivider={showDivider}
        >
            <div className="YContentIndicator">
                <div id="dot" style={{backgroundColor: dotColor}} />
                <TypographyOverline>{label}</TypographyOverline>
            </div>
        </YContentTemplate>
    );
}

// -------------------------------------------------------------------------------------------------------
