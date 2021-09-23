import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({ rating, votes }) {

  return (
    <Fragment >
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">{rating}</Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography>{votes} ratings</Typography>
      </Box>
    </Fragment>
  );
}