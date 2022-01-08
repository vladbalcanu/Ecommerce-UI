import {Grid, Typography} from '@mui/material'
import * as React from 'react'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CartProductCard from '../../components/productCartCard'
import {selectProducts} from '../../store/catalogue/selectors'
import styles from './cartPage.module.css'
import Box from '@mui/material/Box'
import {alpha} from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import {getCartItems} from '../../store/cart/thunks'
import {selectCart, selectCartItems} from '../../store/cart/selectors'
import { selectIsAuth } from '../../store/auth/selectors'

export const CartPage = () => {
  const dispatch = useDispatch()

  const cart = useSelector(selectCart)
  const cartItems = useSelector(selectCartItems)
 
  useEffect(() => {
    dispatch(getCartItems())
  }, [cart, dispatch])


  function originalPrice(){
    let t =0
    console.log(t)
    cartItems.map(item => {t=t+ parseInt(item.product.price)*parseInt(item.quantity)})
    return t;
  }
  function discountedPrice(){
    let t =0
    console.log(t)
    cartItems.map(item => {
      if(item.product.is_discountable==true){
      t= t + parseInt(item.product.discount_price)*parseInt(item.quantity)
      }
      else
      {
      t= t + parseInt(item.product.price)*parseInt(item.quantity)
      }
    })
    return t;
  }
  let discountedPriceVar=discountedPrice();
  let originalPriceVar= originalPrice();
  useEffect(()=>{
    discountedPriceVar=discountedPrice();
    originalPriceVar= originalPrice();
  },cartItems)
  return (

        <Box sx={{display:'flex'}}>
        <Grid container spacing={5} columns={1} sx={{
          alignContent: 'left',
          marginLeft: 15

        }}>

          {cartItems.map(item => (
            <Grid item xs={4} key={item.id}>
              <CartProductCard cartItem={item}/>
            </Grid>
          ))}
        </Grid>
      <Box sx={{
        height: 200,
        width: 700,
        display: 'inline',
        marginRight: 30,
        marginTop: 15,
        alignItems: 'normal',
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 4,
        fontWeight: 'bold'
      }}>
        <Typography sx={{marginTop: 2, marginLeft: 2, fontSize: 20}}>
          Total: ${discountedPriceVar}
        </Typography>
        <Typography sx={{marginTop: 2, marginLeft: 2, fontSize: 20}}>
          Old Total: ${originalPriceVar}
        </Typography>
        <Button variant="outlined" sx={{
          marginTop: 3,
          marginLeft: 3.75,
          boxShadow: 4,
          fontSize: 16,
          width: 300,
          backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
        }}>Checkout Now</Button>
      </Box>
      </Box>



  )


}
