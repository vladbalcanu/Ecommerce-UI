import * as React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import {useSelector} from 'react-redux'
import {selectCart, selectCartItems} from '../../store/cart/selectors'

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99'
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45'
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51'
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11'
  },
  {name: 'Shipping', desc: '', price: 'Free'}
]

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA']
const payments = [
  {name: 'Card type', detail: 'Visa'},
  {name: 'Card holder', detail: 'Mr John Smith'},
  {name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
  {name: 'Expiry date', detail: '04/2024'}
]

export default function Review({shippingAddress}) {

  const cartItems = useSelector(selectCartItems)
  const cart = useSelector(selectCart)
  console.log(shippingAddress)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((cartItem) => (
          <ListItem key={cartItem.id} sx={{py: 1, px: 0}}>
            <ListItemText primary={cartItem.product.title}/>
            <ListItemText primary={'X' + cartItem.quantity}/>
            <Typography variant="body2">{cartItem.product.price * cartItem.quantity}$</Typography>
          </ListItem>
        ))}

        <ListItem sx={{py: 1, px: 0}}>
          <ListItemText primary="Total"/>
          <Typography variant="subtitle1" sx={{fontWeight: 700}}>
            {cart.total_price}$
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{mt: 2}}>
            Shipping
          </Typography>
          <Typography gutterBottom>{Object.values(shippingAddress).join(', ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
