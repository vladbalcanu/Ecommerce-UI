import { Link } from "react-router-dom";
import { useState } from "react";


const ProductList = ({products,title}) => {
    const [text,setText] = useState("")
    function onChangeSearch(event){
        setText(event.target.value)


        console.log(text);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("sa te fut");
    }

    return (  
        <div className="product-list">
            <div className="searchBar"> 
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
            <h2>{title}</h2>
            { 
                products.filter(item => text === "" || item.Name.includes(text)).map(item =>
                    <div className="product-preview">
                        <Link to={`/products/${item.id}`}>
                        <h>Id: { item.id }</h>
                        <h2>Name: { item.Name }</h2>
                        <h3>Producer: { item.Producer }</h3>
                        </Link>
                    </div>
                )
            }
            </div>
    );
}

export default ProductList
;