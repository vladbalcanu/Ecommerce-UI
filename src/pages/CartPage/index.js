import {Grid, Typography} from '@mui/material'
import * as React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CartProductCard from '../../components/productCartCard'
import Box from '@mui/material/Box'
import {alpha} from '@mui/material/styles'
import Button from '@mui/material/Button'
import {getCartItems} from '../../store/cart/thunks'
import {selectCart, selectCartItems} from '../../store/cart/selectors'
import {useNavigate} from 'react-router-dom'

export const CartPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(selectCart)
  const cartItems = useSelector(selectCartItems)

  useEffect(() => {
    dispatch(getCartItems())
  }, [cart, dispatch])


  function originalPrice() {
    let t = 0
    console.log(t)
    cartItems.map(item => {
      t = t + parseInt(item.product.price) * parseInt(item.quantity)
    })
    return t
  }

  function discountedPrice() {
    let t = 0
    console.log(t)
    cartItems.map(item => {
      if (item.product.is_discountable == true) {
        t = t + parseInt(item.product.discount_price) * parseInt(item.quantity)
      } else {
        t = t + parseInt(item.product.price) * parseInt(item.quantity)
      }
    })
    return t
  }

  let discountedPriceVar = discountedPrice()
  let originalPriceVar = originalPrice()
  useEffect(() => {
    discountedPriceVar = discountedPrice()
    originalPriceVar = originalPrice()
  }, [cartItems])

  const handleCheckoutClick = () => {
    navigate('/checkout')
  }

  return (

    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box>
          {cartItems.map(item => (
            <CartProductCard cartItem={item} key={item.id}/>
          ))}
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box sx={{
          marginRight: 30,
          marginTop: 15,
          padding: '5px',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
          borderRadius: '12px',
          boxShadow: 4,
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography sx={{marginTop: 2, marginLeft: 2, fontSize: 20}}>
            Total: ${discountedPriceVar}
          </Typography>
          <Typography sx={{marginTop: 2, marginLeft: 2, fontSize: 20}}>
            Old Total: ${originalPriceVar}
          </Typography>
          <Button variant="outlined" sx={{
            marginTop: 3,
            marginLeft: 2,
            boxShadow: 4,
            fontSize: 16,
            backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
          }} onClick={handleCheckoutClick}>Checkout Now</Button>
        </Box>
      </Grid>

    </Grid>
  )
}
