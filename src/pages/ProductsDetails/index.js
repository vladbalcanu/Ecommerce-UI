import * as React from 'react'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {selectError, selectIsPending, selectProduct} from '../../store/product/selectors'
import styles from './ProductPage.module.css'
import {getProduct} from '../../store/product/thunks'
import ProductImageList from '../../components/productImageList'
import {Typography} from '@mui/material'
import {selectCategories} from '../../store/categories/selectors'
import {getCategories} from '../../store/categories/thunks'
import Box from '@mui/material/Box'
import {alpha} from '@mui/material/styles'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import {selectIsAuth} from '../../store/auth/selectors'
import {addProductToCart} from '../../store/cart/thunks'
import TextField from '@mui/material/TextField'
import ProductReviews from './Reviews/ProductReviews'


const ProductsDetails = () => {
  const {id} = useParams()
  const [open, setOpen] = React.useState(false)
  const product = useSelector(selectProduct)
  const error = useSelector(selectError)
  const isPending = useSelector(selectIsPending)
  const categories = useSelector(selectCategories)
  const isAuth = useSelector(selectIsAuth)
  const [quantity, setQuantity] = useState('1')
  const dispatch = useDispatch()
  const handleAddProductToCart = () => {
    console.log('producDetails')
    console.log(product)
    dispatch(addProductToCart({product, quantity}))
  }
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  useEffect(() => {
    dispatch(getProduct(id))
  }, [])
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  function quantityUpdate(event) {
    setQuantity(event.target.value)
  }

  return (

    <div className={styles.productDetails}>
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {product && (

        <div>
          <Box sx={{marginLeft: 70, marginTop: 10, alignContent: 'center'}}>
            <ProductImageList imageList={product.images}>
            </ProductImageList>
          </Box>
          <Box sx={{
            height: 400,
            width: 1400,
            display: 'flex',
            marginTop: 10,
            marginLeft: 15,
            borderRadius: 5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.2)
          }}>
            <Box sx={{marginLeft: 10, display: 'flow'}}>
              <h2>Title: {product.title}</h2>
              <Typography>Price: ${product.price}
              </Typography>
              {categories.filter(category => category.id == product.category).map(category => (
                <Typography>Category: {category.name}</Typography>
              ))}
              <Typography>Producer: {product.producer}
              </Typography>
              <TextField sx={{
                backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6),
                position: 'absolute', float: 'right',
                marginTop: 5
              }}
                         id="outlined-number"
                         label="Quantity"
                         type="number"
                         defaultValue="1"
                         variant="filled"
                         color='primary'
                         onChange={quantityUpdate}
                         InputLabelProps={{
                           shrink: true
                         }
                         }
              />
            </Box>
            {!isAuth &&
            <Box>
              <Button variant="outlined" onClick={handleClickOpen} type="button" sx={{
                display: 'flex',
                marginLeft: 50,
                marginTop: 10,
                boxShadow: 4,
                fontSize: 16,
                width: 300,
                backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
              }}>Add to cart</Button>
              <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {'You need to be logged in !'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    To see the cart or introduce items in it you need to be logged in
                  </DialogContentText>
                </DialogContent>
                <DialogActions onClick={handleCloseDialog}>
                  <Link to="/signin" className={styles.buttonStyle}><Button variant="outlined" sx={{
                    marginTop: 3,
                    marginLeft: 1,
                    boxShadow: 4,
                    fontSize: 16,
                    width: 150,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                  }}>Sign in</Button></Link>
                  <Link to="/register" className={styles.buttonStyle}><Button variant="outlined" sx={{
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
            </Box>}
            {isAuth &&
            <Box>
              <Button variant="outlined" onClick={handleAddProductToCart} type="button" sx={{
                display: 'flex',
                marginLeft: 50,
                marginTop: 10,
                boxShadow: 4,
                fontSize: 16,
                width: 300,
                backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
              }}>Add to cart</Button>
            </Box>}
          </Box>
          <Box sx={{marginLeft: '70px', marginTop: 10}}>
            <Typography>
              Reviews:
            </Typography>
            <ProductReviews/>

          </Box>
        </div>
      )
      }

    </div>
  )
}

export default ProductsDetails
