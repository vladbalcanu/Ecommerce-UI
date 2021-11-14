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
            <div className="categorySearch">
                

            </div>


            { 
                products.filter(item => text === "" || item.title.includes(text)).map(item =>
                    <div className="product-preview">
                        <Link to={`/products/${item.id}`}>
                        <h2>Name: { item.title }</h2>
                        <h3>Producer: { item.producer }</h3>
                        <h4>Price: {item.price}</h4>
                        <img className="ProductPhoto" src={item.image}>
                            </img>
                        </Link>
                    </div>
                )
            }
            </div>
    );
}

export default ProductList
;