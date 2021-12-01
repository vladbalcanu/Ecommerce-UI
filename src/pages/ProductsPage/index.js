import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/catalogue/selectors";
import { getProducts, } from "../../store/catalogue/thunks";
import styles from './ProductsPage.module.css';
import {selectCategories} from "../../store/categories/selectors";
import {getCategories} from "../../store/categories/thunks";
import ReactDropdown from "react-dropdown";



export const ProductsPage = () => {
    const [text,setText] = useState("")
    const [category,setCategory]=useState("")
    const dispatch=useDispatch();
    const products=useSelector(selectProducts)
    const categories=useSelector(selectCategories)
    useEffect(()=>{
        dispatch(getProducts());
    }, [])
    
    function onChangeSearch(event){
        setText(event.target.value)
        console.log(text);
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    useEffect(()=>{
        dispatch(getCategories());
    },[])



    return (  
        <div className={styles.productList}>
            <div className={styles.searchBar}> 
            <form 
                action="/" 
                method="get"
                onSubmit = {handleSubmit}
                >

             <label htmlFor="header-search">
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search Products"
                name="searchbar"
                onChange = {onChangeSearch} 
            />
                <button type="submit">Search</button>
                </form>
            </div>
            <div className={styles.categorySearch}>
            </div>


            { 
                products.filter(item => text === "" || item.title.includes(text) ).map(item =>
                    <Link to={`/catalogue/searchProducts/products/${item.id}`}>
                    <div className={styles.productPreview}>
                        
                        <h2>Name: {item.title}</h2>
                        <h3>Producer: {item.producer}</h3>
                        <h4>Price: {item.price}</h4>
                        <img className={styles.productPhoto} src={item.image}>
                            </img>
                        
                    </div>
                    </Link>
                )
            }
            </div>
    );
}

