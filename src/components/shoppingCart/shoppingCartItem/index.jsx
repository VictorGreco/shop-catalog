import React, { Fragment } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import MinusOneButton from '../../common/buttons/minusOneButton';
import PlusOneButton from '../../common/buttons/plusOneButton';
import Stack from '@mui/material/Stack';



export default function ShoppingCartItem({ item, addItemToCartHandler, removeItemFromCartHandler }) {
    if (!item) {
        return null;
    }
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.media} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`${item.brand} - ${item.subBrand}`}
                        </Typography>

                    </Fragment>
                }
                secondary={
                    <Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`${item.region}   `}
                            <img src={`/static/flags/${item.country}.png`} height={10} width={10} />
                        </Typography>
                        {` ${item.grape}`}
                    </Fragment>
                }
            />
            <Stack sx={{ height: '100%' }} direction="row" spacing={2}>
                <MinusOneButton removeHandler={removeItemFromCartHandler} item={item} />
                <Typography
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    component="span"
                    variant="h5"
                    color="text.primary"
                >
                    {item.count}
                </Typography>
                <PlusOneButton addHandler={addItemToCartHandler} item={item} />
            </Stack>
        </ListItem>
    );
}

