import { useState } from "react";
import {useHistory } from "react-router-dom";

const Create = () => {
    const [Name,setName]=useState('');
    const [Description,setDescription]=useState('');
    const [Producer,setProducer]=useState('andrei');
    const [isPending,setIsPending]=useState(false);
    const history = useHistory();

    const handleSubmit= (e) => {
        e.preventDefault();
        const product= {Name, Description, Producer};

        setIsPending(true);
        fetch('http://localhost:8000/products',{

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
                <label> Product Name:</label>
                <input type="text"
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}/>
                <label> Product Body:</label>
                <textarea 
                required
                value={Description}
                onChange={(e)=> setDescription(e.target.value)}/>
                <label> Product author:</label>
                <select value={Producer}
                onChange={(e)=> setProducer(e.target.value)}>
                    <option value="vlad">vlad</option>
                    <option value="andrei">andrei</option>
                </select>
                {!isPending && <button>Add Product</button> }
                {isPending && <button>Adding Product...</button> }
                
            </form>
        </div>
     );
}
 
export default Create;