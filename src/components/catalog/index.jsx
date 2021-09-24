import React from 'react';

import Grid from '@mui/material/Grid';
import CatalogItem from './catalogItem';

export default function Catalog({ catalog, addItemToCartHandler, openShopCart }) {

  return (
    <Grid container>
        {catalog.map((item, index) => {
            return (
                <Grid key={`${item.grape}-${item.country}-${index}`} item xs={12} md={openShopCart ? 4 : 3}>
                    <CatalogItem item={item} addItemToCartHandler={addItemToCartHandler} />
                </Grid>
            );
        })}
    </Grid>
  );
}