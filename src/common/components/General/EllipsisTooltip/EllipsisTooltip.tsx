import {ReactElement, useCallback, useState} from 'react';

import {PopperProps, Tooltip, TooltipProps} from '@mui/material';

export interface EllipsisTooltipProps {
    label: string;
    children: ReactElement;
    popperProps?: Partial<PopperProps>;
    placement?: TooltipProps['placement'];
    hasArrow?: boolean;
}

function EllipsisTooltip(props: EllipsisTooltipProps) {
    const {
        label,
        children,
        hasArrow = true,
        popperProps = {
            sx: {zIndex: (theme) => theme.zIndex.tooltip},
        },
        placement = 'top',
    } = props;

    const [tooltipEnabled, setTooltipEnabled] = useState(false);

    const handleShouldShow = useCallback(({currentTarget}: React.MouseEvent<HTMLElement>) => {
        if (currentTarget.scrollWidth > currentTarget.clientWidth) {
            setTooltipEnabled(true);
        }
    }, []);

    const hideTooltip = useCallback(() => setTooltipEnabled(false), []);

    return (
        <Tooltip
            onMouseEnter={handleShouldShow}
            onMouseLeave={hideTooltip}
            disableHoverListener={!tooltipEnabled}
            arrow={hasArrow}
            placement={placement}
            title={label}
            PopperProps={popperProps}
        >
            {children}
        </Tooltip>
    );
}

export default EllipsisTooltip;
