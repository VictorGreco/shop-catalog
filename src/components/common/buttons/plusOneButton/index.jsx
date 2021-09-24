import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';


export default function PlusOneButton({ item, addHandler }) {
    const theme = useTheme();

    return (
        <Button size="small" variant="outlined"  onClick={() => {
            addHandler(item);
        }}>
            +
        </Button>
    );
}