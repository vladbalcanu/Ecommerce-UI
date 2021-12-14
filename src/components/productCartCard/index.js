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

export default function CartProductCard({product}) {
    function quantityUpdate(event){
        console.log(event.target.value)
    }
    const handleDelete = () => {
        console.log('You clicked the delete icon.');
      };
  const [image,setImage]=useState("");
  useEffect(()=>{
    product.images.filter(image => image.display_order==0).map(image => setImage(image.image.large));
  })

  return (
    
    <Card sx={{ width:1000 ,marginTop:5,ml:2,boxShadow:5,display:"flex"}}>

      <Link to={`/catalogue/searchProducts/products/${product.id}`} className={styles.textStyle}>
      <CardMedia sx={{display:"flex",
      }}
        component="img"
        height="192"
        image={image}
        alt="Whatever"
      />
       <CardHeader color="inherit"
        title={product.title}/>

      <CardContent>
          <Typography color="green">
            $300
          </Typography> 
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
          defaultValue={1}
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