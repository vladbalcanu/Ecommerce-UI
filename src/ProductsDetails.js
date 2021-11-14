import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const ProductsDetails = () => {
    const { id } = useParams();
    const { data: product, error, isPending} = useFetch('http://127.0.0.1:8000/api/v1/catalogue/product/' + id);
    const history = useHistory();
    const handleClick =() =>{

        fetch('http://127.0.0.1:8000/api/v1/catalogue/product/'+ product.id, {
        method: 'DELETE'


        }).then(()=>{
            history.push('/');

        })
    }

    
    return (  
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {product && (
                <article>
                    <h2>{ product.title }</h2>
                    
                    <img src={product.image} alt="" className="singleProductPhoto" />
                    <p>Price: {product.price}</p>
                    <p>Produced by { product.producer }</p>
                    <p>Category: {product.category}</p>
                    <div className="singleProductDescription">Description :{ product.description }</div>
                    <p>Warranty: {product.warranty} </p>
                    <p>Year: {product.year}</p>
                    <p>Product Code: {product.product_code}</p>
                    <p>Color: {product.color}</p>
                    <button onClick={ handleClick}>Delete</button>
                    <button>Add to List</button>
                </article>
            ) }
        </div>
    );
}
 
export default ProductsDetails;