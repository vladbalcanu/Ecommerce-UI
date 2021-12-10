import * as React from 'react'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectProducts} from '../../store/catalogue/selectors'
import {getProducts, searchProducts} from '../../store/catalogue/thunks'
import styles from './ProductsPage.module.css'
import {selectCategories} from '../../store/categories/selectors'
import {getCategories} from '../../store/categories/thunks'
import RecipeReviewCard from '../../components/productCard'
import Grid from '@mui/material/Grid'


export const ProductsPage = () => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const categories = useSelector(selectCategories)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories())

  }, [dispatch])

  function onChangeSearch(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(text)
    dispatch(searchProducts(text, category))

  }


  return (
    <div className={styles.productList}>

      <div className={styles.searchBar}>
        <form
          action="/"
          method="get"
          onSubmit={handleSubmit}
        >

          <label htmlFor="header-search">
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search Products"
            name="searchbar"
            onChange={onChangeSearch}
          />
          <button onClick={handleSubmit} type="submit">Search</button>
          <label>
            {<select value={category}
                     onChange={(e) => setCategory(e.target.value)} className={styles.categorySearch}>
              {categories && categories.map(item => (

                <option value={item.id}>{item.title}
                </option>
              ))}
            </select>
            }
          </label>

        </form>
      </div>


      <Grid container spacing={2} columns={12}>

        {products.map(item => (

          <Grid item xs={4}>
            <style>
              text-decoration:none;
            </style>

            <RecipeReviewCard product={item}/>

          </Grid>
        ))}
      </Grid>
    </div>
  )
}

