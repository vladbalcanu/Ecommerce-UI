import { useState } from "react";
import {useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [producer,setProducer]=useState('Benq');
    const [price,setPrice]=useState('');
    const [product_code,setProductCode]=useState('');
    const [color,setColor]=useState('');
    const [warranty,setWarranty]=useState('300');
    const [year,setYear]=useState('2021');
    const [category,setCategory]=useState('1');
    // const [image,setImage]=useState('');
    
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit= (e) => {
        e.preventDefault();
        const product= {title,product_code,color,warranty,producer,price,description,year,category };

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
                onChange={(e)=>setColor(e.target.value)}
                />
                <label> Product Producer:</label>
                <select value={producer}
                onChange={(e)=> setProducer(e.target.value)}>
                    <option value="BenQ">BenQ</option>
                    <option value="Eizo">Eizo</option>
                </select>
                {!isPending && <button>Add Product</button> }
                {isPending && <button>Adding Product...</button> }
                
            </form>
        </div>
     );
}
 
export default Create;