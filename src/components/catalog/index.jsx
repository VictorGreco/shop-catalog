import React from 'react';

import Grid from '@mui/material/Grid';
import CatalogItem from './catalogItem';

export default function Catalog({ catalog, addItemToCartHandler }) {

  return (
    <Grid container>
        {catalog.map((item, index) => {
            return (
                <Grid key={`${item.grape}-${item.country}-${index}`} item xs={12} md={4}>
                    <CatalogItem item={item} addItemToCartHandler={addItemToCartHandler} />
                </Grid>
            );
        })}
    </Grid>
  );
}