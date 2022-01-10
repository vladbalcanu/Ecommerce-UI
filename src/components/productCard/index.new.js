import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addProductToCart} from '../../store/cart/thunks'


export default function ProductCard({product}) {
  const dispatch = useDispatch()
  const quantity = 1;


  const handleAddProductToCart = () => {
    dispatch(addProductToCart({product,quantity}))
  }

  return (
    <Card style={{backgroundColor: 'white', boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)', padding: '0'}}>
      {product.is_discountable &&
      <div style={{position: 'absolute', margin: '5px'}}>
        <DiscountTag discountInPercents={Math.round((1 - product.discount_price / product.price) * 100)}/>
      </div>
      }
      <NavLink to={`/catalogue/searchProducts/products/${product.id}`} style={{textDecoration: 'none'}}>
        {
        (product && product.images.length > 0)
          ?
          <CardMedia
            component="img"
            height="400"
            width="400"
            image={product.images.find(i => i.display_order === 0).image.medium}
            alt={product.title}
          />
          :
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={'https://picsum.photos/200'}
            alt={product.title}
          />
        }

        <CardContent sx={{px: '10px', py: '5px'}}>
          <Typography variant="h6" color="text.primary">
            {product.title}
          </Typography>
        </CardContent>
      </NavLink>
      <CardContent sx={{px: '10px', py: '5px'}}>
        <Rating name="read-only" value={product.rating} readOnly size="small"/>
      </CardContent>
      <CardContent sx={{px: '10px', py: '5px'}} style={{display: 'flex', justifyContent: 'space-between'}}>
        <PriceTag price={product.price} discountPrice={product.discount_price} isDiscountable={product.is_discountable}/>
        <IconButton aria-label="add" style={{color: 'rgb(210, 63, 87)'}} sx={{p: 0}} onClick={handleAddProductToCart}>
          <AddBoxOutlinedIcon/>
        </IconButton>
      </CardContent>
    </Card>
  )
}

export const PriceTag = ({price, isDiscountable, discountPrice}) => {
  return (
    <>
      {!isDiscountable ?
        <Typography variant="subtitle1" color={'rgb(210, 63, 87)'}>
          {price}$
        </Typography>
        :
        <Grid container justify="space-between">
          <Typography inline={"true"} align="left" variant="subtitle1" color={'rgb(210, 63, 87)'} sx={{pr: '2px'}}>
            {discountPrice}$
          </Typography>
          <Typography inline={"true"} align="right" variant="subtitle1" color={'gray'} sx={{pl: '2px'}}
                      style={{textDecoration: 'line-through'}}>
            {price}$
          </Typography>
        </Grid>
      }
    </>
  )
}

export const DiscountTag = ({discountInPercents}) => {
  return (
    <Box component={'div'}
         style={{
           backgroundColor: 'rgb(210, 63, 87)',
           color: 'white',
           padding: '5px',
           fontSize: 'small',
           width: 'fit-content',
           borderRadius: '20px'
         }}
    >
      {discountInPercents}% off
    </Box>
  )
}
