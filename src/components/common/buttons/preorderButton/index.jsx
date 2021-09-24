import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function PreorderButton({ order, sendPreorder, contact }) {
    const theme = useTheme();

    const sendPreorderRequestHandler = () => {
        const url = `https://${process.env.REACT_APP_API_DOMAIN}/preorder`;
        const data = { order, contact }
        const headers = {
            'Content-Type': 'application/json'
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    return (
        <Button
            variant="contained"
            size="large"
            startIcon={<ConfirmationNumberIcon />}
            onClick={sendPreorderRequestHandler}>
            Pre-order
        </Button>
    );
}