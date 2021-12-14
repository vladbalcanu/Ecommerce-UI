import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { selectError, selectIsPending, selectProduct } from "../../store/product/selectors";
import styles from './ProductPage.module.css';
import { getProduct } from "../../store/product/thunks";
import ProductImageList from "../../components/productImageList";
import { IconButton, Typography } from "@mui/material";
import { selectCategories } from "../../store/categories/selectors";
import { getCategories } from "../../store/categories/thunks";
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';


const ProductsDetails = () => {
    const { id } = useParams();
    const product = useSelector(selectProduct)
    const error = useSelector(selectError)
    const isPending = useSelector(selectIsPending)
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [])
    useEffect(() => {
        dispatch(getProduct(id));
    }, [])

    return (

        <div className={styles.productDetails}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (


                <div className={styles.productImage}>
                    <ProductImageList imageList={product.images}>
                    </ProductImageList>
                    <div class={styles.arangeDetails}>
                        <h2>Title: {product.title}</h2>
                        <Typography>Price: ${product.price}
                        </Typography>
                        {categories.filter(category => category.id == product.category).map(category => (
                            <Typography>Category: {category.name}</Typography>
                        ))}
                        <Typography>Producer: {product.producer}
                            
                        </Typography>
                    <IconButton sx={{ml:10,marginTop:10 , fontSize:100 ,backgroundColor: "primary" }}size="large" color="primary">
                    <AddShoppingCartSharpIcon sx={{fontSize:60}} color="succes">
                                
                    </AddShoppingCartSharpIcon>
                        
                    </IconButton>
                    </div>

                </div>


            )
            }
        </div >
    );
}

export default ProductsDetails;