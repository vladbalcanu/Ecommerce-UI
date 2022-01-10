import React from 'react'
import Box from '@mui/material/Box'
import {Typography} from '@mui/material'
import Grid from '@mui/material/Grid'

export default function OrderItem({order}) {

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography>
            {order.tracking_number}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {new Date(order.created).toLocaleString('en-US')}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {order.cart.total_price} $
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
