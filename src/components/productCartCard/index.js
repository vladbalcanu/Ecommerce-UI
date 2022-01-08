import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import styles from './productCartCard.module.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { alpha } from '@mui/material/styles';
import {PriceTag} from '../productCard/index.new'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, updateItemFromCart } from '../../store/cart/thunks';

export default function CartProductCard({cartItem}) {
  
  const dispatch= useDispatch();
  console.log("PRODUCT CART CARD QUANTITY")
  console.log(cartItem.quantity)
    function quantityUpdate(event){
        let newCartItem = {... cartItem};
        newCartItem.quantity = event.target.value;
        console.log("FUNCTION")
        console.log(newCartItem.quantity)
        dispatch(updateItemFromCart({newCartItem}))
    }
    const product = cartItem.product
    const handleDelete = () => {
      console.log(cartItem.id)
      dispatch(deleteItemFromCart({cartItem}))
      };
  const [image,setImage]=useState("");
  useEffect(()=>{
    product.images.filter(image => image.display_order==0).map(image => setImage(image.image.large));
  }, [])

  return (

    <Card sx={{ width:1000 ,marginTop:5,ml:2,boxShadow:5,display:"flex"}}>

      <Link to={`/catalogue/searchProducts/products/${product.id}`} className={styles.textStyle}>
        {(product && product.images.length > 0)
          ?
          <CardMedia
            component="img"
            height="200"
            width="200"
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
       <CardHeader color="inherit"
        title={product.title}/>

      <CardContent>
        <PriceTag price={product.price} discountPrice={product.discount_price} isDiscountable={product.is_discountable}/>
      </CardContent>
       </Link>
      <div className={styles.quantityStyle}>
          <TextField sx={{backgroundColor:(theme)=>alpha(theme.palette.primary.contrastText, 0.6),
          position:"absolute",float:"right",
          marginLeft:20,
          marginTop:15,
        }}
          id="outlined-number"
          label="Quantity"
          type="number"
          defaultValue={cartItem.quantity}
          variant="filled"
          color='primary'
          onChange={quantityUpdate}
          InputLabelProps={{
            shrink: true,
          }
          }
        />
        </div>
      <IconButton sx={{width:5 ,marginLeft:117,marginBottom:34,position:"absolute",float:"right" }} size="large" onClick={handleDelete} color='error'>
            <DeleteIcon sx={{fontSize:50}} />
        </IconButton>
    </Card>
  );
}
