import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const ProductsDetails = () => {
    const { id } = useParams();
    const { data: product, error, isPending} = useFetch('http://localhost:8000/products/' + id);
    const history = useHistory();
    const handleClick =() =>{

        fetch('http://localhost:8000/products/'+ product.id, {
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
                    <h2>{ product.Name }</h2>
                    <p>Written by { product.Producer }</p>
                    <div>{ product.Description }</div>
                    <button onClick={ handleClick}>Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default ProductsDetails;