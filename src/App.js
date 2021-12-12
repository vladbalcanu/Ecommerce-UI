import React, {useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage/loadable'
import Register from './pages/Register/'
import SignIn from './pages/SignIn'
import {NotFoundPage} from './pages/NotFoundPage/loadable'
import {useDispatch} from 'react-redux'
import {getCurrentUser} from './store/auth/thunks'
import {ProductsPage} from './pages/ProductsPage'
import Navbar from './components/Navbar'
import RecipeReviewCard from './components/productCard/index'
import ProductsDetails from './pages/ProductsDetails'
import {Create} from './pages/AddProduct'
import ProductImageList from './components/productImageList'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path='/catalogue/searchProducts' element={<ProductsPage/>}/>
        <Route exact path='/catalogue/searchProducts/products/:id' element={<ProductsDetails/>}/>
        <Route exact path='/create/' element={<Create/>}/>
        <Route exact path='/card' element={<ProductImageList/>}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
