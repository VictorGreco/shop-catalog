
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';


export default function MinusOneButton({ item, removeHandler }) {
    const theme = useTheme();

    return (
        <Button size="small" variant="outlined" color="error" onClick={() => {
            removeHandler(item);
        }}>
            -
        </Button>
    );
}