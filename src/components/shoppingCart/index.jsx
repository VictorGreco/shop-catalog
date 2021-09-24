import React from 'react';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import ShoppingCartItem from './shoppingCartItem';

export default function ShoppingCart({ addItemToCartHandler, removeItemFromCartHandler, shoppingCart }) {
  const reducedShoppingCart = shoppingCart.length > 0 && shoppingCart.reduce((prev, current) => {

    for (let i = 0; i < prev.length; i++) {
      if (current.media === prev[i].media) {
        prev[i].count += 1
      }
      return prev;
    }

    prev.push({ ...current, count: 1 })

    return prev;
  }, []);

  if (!reducedShoppingCart) {
    return (
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="h3"
        color="#CCCCCC"
      >
        Empty shopping cart
      </Typography>
    );
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {reducedShoppingCart.map((item, index) => {
        if (!item) {
          return null;
        }
        return (
          <ShoppingCartItem
            key={index}
            item={item}
            removeItemFromCartHandler={removeItemFromCartHandler}
            addItemToCartHandler={addItemToCartHandler} />
        )
      })}
    </List>
  );
}
