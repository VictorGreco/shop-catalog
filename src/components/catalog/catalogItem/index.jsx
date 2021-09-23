import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import BasicRating from './basicRating';

export default function MediaControlCard({ item, addItemToCartHandler }) {
    const theme = useTheme();

    const { media, rating, numberOfRates, brand, subBrand, grape, color, sparkly, region, country } = item;

    return (
        <Card sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
                component="img"
                sx={{ width: 90 }}
                image={media}
                alt="Bottle of wine"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {brand}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {subBrand}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {region}, {country}
                    </Typography>
                    <img src={`/static/flags/${country}.png`} height={20} width={20} />
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        🍇 {grape}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {color} / {sparkly}
                    </Typography>
                    <BasicRating rating={rating} votes={numberOfRates} />
                    <Button variant="contained" startIcon={<AddShoppingCartIcon />} onClick={() => {
                        addItemToCartHandler(item);
                    }}>
                        add
                    </Button>
                </CardContent>
            </Box>

        </Card>
    );
}