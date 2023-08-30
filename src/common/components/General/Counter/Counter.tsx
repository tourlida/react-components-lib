import {CSSProperties} from 'react';

import {styled} from '@mui/material';

import {TypographyMenuStyled} from '../../ContentTile/Typography';

// -------------------------------------------------------------------------------------------------------
export interface CounterProps {
    value: number;
    style?: CSSProperties;
}
// -------------------------------------------------------------------------------------------------------
const CounterCore = styled(TypographyMenuStyled, {skipSx: true})(({theme}) => ({
    color: theme.palette.grey[900],
    backgroundColor: theme.palette.secondary.light,
    width: 'fit-content',
    borderRadius: '100px',
    paddingRight: '4px',
    paddingLeft: '4px',
    paddingTop: '1px',
}));
// -------------------------------------------------------------------------------------------------------
export default function YCounter({value, style}: CounterProps) {
    return <CounterCore style={style}>{value > 99 ? '+99' : value}</CounterCore>;
}
// -------------------------------------------------------------------------------------------------------
