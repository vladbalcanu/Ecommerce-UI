import { useEffect, useState } from "react";
import styles from "./AddProductPage.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import { useDispatch } from "react-redux";
import { getCategories } from "../../store/categories/thunks";


export function Create() {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [producer,setProducer]=useState('');
    const [price,setPrice]=useState('');
    const [product_code,setProductCode]=useState('');
    const [color,setColor]=useState('');
    const [warranty,setWarranty]=useState('');
    const [year,setYear]=useState('');
    const [category,setCategory]=useState('');
    const [isPending,setIsPending]=useState(false);
    const categories = useSelector(selectCategories);
    const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(getCategories());}, []
    )



    
    return ( 
        <div className={styles.createPage}>
            <h2>Add a new Product</h2>
            <form >
                <label> Product Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <label> Product Description:</label>
                <textarea 
                required
                value={description}
                onChange={(e)=> setDescription(e.target.value)}/>
                <label>Product Price:</label>
                <textarea
                required
                value={price}
                onChange={(e)=>setPrice(e.target.value)}/>
                <label>Product code:</label>
                <textarea 
                required
                value={product_code}
                onChange={(e)=>setProductCode(e.target.value)}/>
                <label>Product Color:</label>
                <textarea
                required
                value={color}
                onChange={(e)=>setColor(e.target.value)}/>
                <label>Product warranty:</label>
                <textarea
                required
                value={warranty}
                onChange={(e)=>setWarranty(e.target.value)}/>
                <label>Product year:</label>
                <textarea
                required
                value={year}
                onChange={(e)=>setYear(e.target.value)}/>
                <label> Product Category:</label>
                { <select value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                    {categories && categories.map(item => (

                        <option value={item.id}>{item.title}
                        </option>
                    ))}
                    </select> }
                <label> Product Producer:</label>
                <textarea
                required
                value={producer}
                onChange={(e)=>setProducer(e.target.value)}/>
                {!isPending && <button>Add Product</button> }
                {isPending && <button>Adding Product...</button> }
            </form>
        </div>
     );
}
 
export default Create;