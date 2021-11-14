import ProductList from './ProductList';
import useFetch from './useFetch';
import React, {useState} from 'react'

const Home = () => {
    const {data, isPending, error}=useFetch('http://127.0.0.1:8000/api/v1/catalogue/product/');
    return (
        
            <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} 
             {data && data.results && <ProductList products={data.results} title="" />} 
        </div>
      );
}
 
export default Home;