import { LinearProgress } from '@mui/material';
import { grey } from '@mui/material/colors';

export interface ProgressBarProps {
    value?: number;
    variant: 'buffer'
    | 'determinate'
    | 'indeterminate'
    | 'query';
}

function ProgressBar({ value = 100, variant = 'determinate' }: ProgressBarProps) {
    return (
        <LinearProgress
            variant={variant}
            value={value}
            sx={{
                backgroundColor: 'grey.100',
                borderRadius: '2px',
                '.MuiLinearProgress-bar.MuiLinearProgress-barColorPrimary':
                {
                    borderRadius: '2px',
                    background:
                        value === 100
                            ? grey[800]
                            : `linear-gradient(270deg, ${grey[800]
                            } 0%, white ${value}%)`,
                },
            }}
        />
    );
}

export default ProgressBar;
