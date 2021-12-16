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
import { Link } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../store/auth/selectors';
import Popper from '@mui/material/Popper';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { NoEncryptionGmailerrorredOutlined } from '@mui/icons-material';

export default function ProductCard({ product }) {
  const [image, setImage] = useState("");
  const isAuth = useSelector(selectIsAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    product.images.filter(image => image.display_order == 0).map(image => setImage(image.image.large));
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ width: 350 }}>
      <div className={styles.cardStyle}>
        <Link to={`/catalogue/searchProducts/products/${product.id}`} className={styles.textStyle}>
          <CardHeader
            title={product.title}
            producer={product.producer}
          />
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="Whatever"
          />

          <CardContent>
            <Typography>
              ${product.price}
            </Typography>
          </CardContent>
        </Link>
      </div>
      {!isAuth && (<div className={styles.buttonStyles}>
        <CardActions >
          <IconButton aria-label="Rating" sx={{ mr: 15 }}
          size="large"
            type="button">
            <BasicRating></BasicRating>
          </IconButton>
          <IconButton sx={{ fontSize: 60 }} 
            aria-label="add to cart"
            color="success"
            size="large"
            onClick={handleClickOpen}>
            <AddBoxIcon sx={{ fontSize: 50 }} />
          </IconButton>
          <Dialog
              open={open}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"You need to be logged in !"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  To see the cart or introduce items in it you need to be logged in
                </DialogContentText>
              </DialogContent>
              <DialogActions onClick={handleCloseDialog}>
                <Link to="/signin" className={styles.buttonStyles}><Button variant="outlined" sx={{
                  marginTop: 3,
                  marginLeft: 1,
                  boxShadow: 4,
                  fontSize: 16,
                  width: 150,
                  backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}>Sign in</Button></Link>
                <Link to="/register" className={styles.buttonStyles}><Button variant="outlined" sx={{
                  marginTop: 3,
                  marginLeft: 1,
                  marginRight: 10,
                  boxShadow: 4,
                  fontSize: 16,
                  width: 150,
                  backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}>Register</Button></Link>
              </DialogActions>
            </Dialog>
        </CardActions>
      </div>)}

      {isAuth && (<div className={styles.buttonStyles}>
        <CardActions >
          <IconButton aria-label="Rating" sx={{ mr: 15 }}>
            <BasicRating></BasicRating>
          </IconButton>
          <IconButton sx={{ fontSize: 60 }} aria-label="add to cart" color="success" size="large" >
            <AddBoxIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </CardActions>
      </div>)}
    </Card>
  );
}