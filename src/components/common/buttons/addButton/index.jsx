import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function AddButton({ item, addHandler }) {
    const theme = useTheme();

    return (
        <Button variant="contained" startIcon={<AddShoppingCartIcon />} onClick={() => {
            addHandler(item);
        }}>
            add
        </Button>
    );
}