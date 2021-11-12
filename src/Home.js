import ProductList from './ProductList';
import useFetch from './useFetch';
import React, {useState} from 'react'

const Home = () => {

    const {data: products, isPending, error}=useFetch('http://localhost:8000/products/');


    return (
        
            <div className="home">
        

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} 
             {products && <ProductList products={products} title="All Products!" />} 

           
        </div>
      );
}
 
export default Home;