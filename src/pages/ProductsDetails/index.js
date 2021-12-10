import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { selectError, selectIsPending, selectProduct } from "../../store/product/selectors";
import styles from './ProductPage.module.css';
import {getProduct} from "../../store/product/thunks";


const ProductsDetails = () => {
    const {id} =useParams();
    console.log(id);
    const product= useSelector(selectProduct)
    console.log(product)
    const error=useSelector(selectError)
    const isPending=useSelector(selectIsPending)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProduct(id));
    },[])

    return (  
        
        <div className={styles.productDetails}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {product && (
                <article>
                    <h2>{ product.title }</h2>
                    
                    <img src={product.image} alt="" className={styles.singleProductPhoto} />
                    <p>Price: {product.price}</p>
                    <p>Produced by { product.producer }</p>
                    <p>Category: {product.category}</p>
                    <div className={styles.singleProductDescription}>Description :{ product.description }</div>
                    <p>Warranty: {product.warranty} </p>
                    <p>Year: {product.year}</p>
                    <p>Product Code: {product.product_code}</p>
                    <p>Color: {product.color}</p>
                    <button className={styles.addButton}>Add to List</button>
                    <button className={styles.deleteButton}><i className="fa fa-trash"></i></button>
                    
                    
                </article>
            ) }
        </div>
    );
}
 
export default ProductsDetails;