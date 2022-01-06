import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/catalogue/selectors'
import { getProducts } from '../../store/catalogue/thunks';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './index.css';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function HomePage() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProducts()) }, []);
  console.log(products);
  return (
    <div>
      {/* <header>
          <nav id="nav">
            <div class="logo nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/BRANDY_1x.png" alt="brand-logo"/></div>
            <ul class="nav-common">
              <li><a href="#">home</a></li>
              <li><a href="#products">products</a></li>
              <li><a href="#collections">collections</a></li>
              <li><a href="#blog">blog</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
            <div class="cart nav-icon nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412544/E-commerce%20landing%20page/icons/shopping_cart_1x.png" alt="shopping-cart"/></div>
            <div class="menu nav-icon nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/menu_1x.png" alt="hamburger-menu"/></div>
          </nav>
          <div id="header-hero">
            <div class="header-bg"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg" alt="header-image" /> </div>
            <div class="header-content">
              <p class="heading-1">fashion collection 2017</p>
              <h1>wellcome to brand<span class="logo-style">y</span> unique store</h1>
              <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div class="button">
                <p>shop now</p>
              </div>
            </div>
          </div>
        </header> */}
        <section id="summer-collection">
          <div class="container">
            <div class="sc-content">
              <h1>summer collection</h1>
              <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="#">discover now</a> </div>
            <div class="sc-media">
              <div class="sc-media-bg"> <img src="assets\images\istockphoto-1186902469-612x612.jpg" alt="sc-image" /> </div>
            </div>
          </div>
        </section>
        <section id="products">
          <div class="container">
            <div class="products-header">
              <h2>popular products</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="product product-1">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg" alt="product-image"/>
                <figcaption>cold fashion</figcaption>
                <figcaption>$ 56.00</figcaption>
              </figure>
            </div>
            <div class="product product-2">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg" alt="product-image"/>
                <figcaption>women fashion</figcaption>
                <figcaption>$ 84.00</figcaption>
              </figure>
            </div>
            <div class="product product-3">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg" alt="product-image"/>
                <figcaption>women fashion</figcaption>
                <figcaption>$ 48.00</figcaption>
              </figure>
            </div>
            <div class="product product-4">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg" alt="product-image"/>
                <figcaption>men fashion</figcaption>
                <figcaption>$ 89.00</figcaption>
              </figure>
            </div>
            <div class="product product-5">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg" alt="product-image"/>
                <figcaption>cold fashion</figcaption>
                <figcaption>$ 56.00</figcaption>
              </figure>
            </div>
            <div class="product product-6">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg" alt="product-image"/>
                <figcaption>women fashion</figcaption>
                <figcaption>$ 84.00</figcaption>
              </figure>
            </div>
            <div class="product product-7">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg" alt="product-image"/>
                <figcaption>women fashion</figcaption>
                <figcaption>$ 48.00</figcaption>
              </figure>
            </div>
            <div class="product product-8">
              <figure> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg" alt="product-image"/>
                <figcaption>men fashion</figcaption>
                <figcaption>$ 89.00</figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* <section id="collections">
          <div class="container">
            <div class="c-1">
              <div class="c-1-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/suit-collections/suit-collection-img_3x.jpg" alt="image"/> </div>
            </div>
            <div class="c-2">
              <h2>featured collection</h2>
              <hr />
              <div class="c-2-image-holder"> <img class="left" src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412552/E-commerce%20landing%20page/suit-collections/collection-2-img_3x.jpg" alt=""/><img class="right" src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412552/E-commerce%20landing%20page/suit-collections/collection-1-img_3x.jpg"
                alt=""/></div>
                <p class="button">view all collections</p>
              </div>
            </div>
        </section>
        <section id="blog">
          <div class="container">
            <div class="blog-header">
              <h2>latest from blog</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="blog-content">
              <div class="blog-1">
                <div class="blog-1-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412548/E-commerce%20landing%20page/blog/blog-2-img_3x.jpg" alt="image"></img> </div>
                <div class="blog-1-content">
                  <h4>Lorem Ipsum</h4>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p class="button">view post</p>
                </div>
              </div>
              <div class="blog-2">
                <div class="blog-2-image-holder"> <img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/blog/blog-1-img_3x.jpg" alt="image"></img> </div>
                <div class="blog-2-content">
                  <h4>Lorem Ipsum</h4>
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <p class="button">view post</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="container">
            <h4>cantact us</h4>
            <p>451 awenve 5th street new york city</p>
            <p>+ (42) 442 4521</p>
            <p>info.fashion@gmail.com</p>
            <p class="email">emailus <span><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/get_in_touch_1x.png" alt="email-image"></img></span></p>
          </div>
        </section> */}
        <footer>
          <p class="copy-right"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/copy-right-img_1x.png" alt="copy right image" /> 2017 all right recived </p>
          <p>privacy policy</p>
          <p>license</p>
        </footer>
        <div class="back-to-top"><a href="#nav"> <img title="Back to Top." src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png" alt="back to top"></img></a> </div>
    </div>
  )
}
