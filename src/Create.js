import { useState } from "react";
import {useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Create = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [producer,setProducer]=useState('');
    const [price,setPrice]=useState('');
    const [product_code,setProductCode]=useState('');
    const [color,setColor]=useState('');
    const [warranty,setWarranty]=useState('');
    const [year,setYear]=useState('');
    const [category,setCategory]=useState('');
    const {data}=useFetch('http://127.0.0.1:8000/api/v1/catalogue/category/');
    const categories=data?.results;
    //const [image,setImage]=useState('');
    
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();
    console.log({categories})

    const handleSubmit= (e) => {
        e.preventDefault();
        const product= {title,product_code,color,warranty,producer,price,description,year,category};

        setIsPending(true);
        fetch('http://127.0.0.1:8000/api/v1/catalogue/product/',{

            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        }).then(() => {
            console.log('New product added');
            setIsPending(false);
            history.push('/');
        })
    }
    
    return ( 
        <div className="create">
            <h2>Add a new Product</h2>
            <form onSubmit={handleSubmit}>
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
                <select value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                    {categories && categories.map(item => (

                        <option value={item.id}>{item.title}
                        </option>
                    ))}
                    </select>
                <label> Product Producer:</label>
                <textarea
                required
                value={producer}
                onChange={(e)=>setProducer(e.target.value)}/>
                {/* <label> Product image:</label>
                <input type="image"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                /> */}
                {!isPending && <button>Add Product</button> }
                {isPending && <button>Adding Product...</button> }
            </form>
        </div>
     );
}
 
export default Create;