import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import BasicRating from './rating';
import styles from './productcard.module.css';
import Link from '@mui/material/Link';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function RecipeReviewCard({product}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <div className={styles.cardStyle}>
        <Link href={`/catalogue/searchProducts/products/${product.id}`} underline="none">
      <CardHeader
        title={product.title}
        producer={product.producer}
      />
      <CardMedia
        component="img"
        height="240"
        image={product.image}
        alt="Whatever"
      />

      <CardContent>
          <Typography>
            ${product.price}
          </Typography>
      </CardContent>
      </Link>
      </div>

      <CardActions >
        
        <IconButton aria-label="Rating" sx={{mr:15}}>
          <BasicRating></BasicRating>
        </IconButton>
        <IconButton aria-label="add to cart" color="success" size="large" >
          <AddBoxIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}