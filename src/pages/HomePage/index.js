import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/catalogue/selectors'
import { getProducts } from '../../store/catalogue/thunks';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import './index.css';
import ProductCard from '../../components/productCard/index.new'
import imagee from './back.jpg'


export function HomePage() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProducts()) }, []);


  return (
    <div>
      <section id="summer-collection">
        <div class="container">
          <div class="sc-content">
            <h1>Super ofertă</h1>
            <p class="description" align="justify">Ai laptopuri sau monitoare pe care nu le mai folosesti și vrei altele noi? Nu-ți mai place actualul monitor si vrei să-l schimbi? Nu rata oferta din programul nostru
            rabla! Pentru fiecare monitor sau laptop vechi pe care il returnezi in magazin primesti un voucher de 100 de lei pentru a cumpăra altul nou direct din magazin! Nu rata aceasta oferta 
            in care ridicăm personal produsele vechi la luvrarea celor noi!</p>
          </div>
          <div class="sc-media">
            <div class="sc-media-bg"> <img src={imagee} /> </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div class="container">
          <div class="products-header">
            <h2>Produse populare</h2>
          </div>

          <Grid container spacing={2}>
            {products.slice(0, 8).map(p => (<Grid item xs={3} key={p.id}>
              <ProductCard product={p} />
            </Grid>))}
          </Grid>
        </div>
      </section>

      <div class="back-to-top"><a href="#nav"> <img title="Back to Top." src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png" alt="back to top"></img></a> </div>
    </div>
  )
}
