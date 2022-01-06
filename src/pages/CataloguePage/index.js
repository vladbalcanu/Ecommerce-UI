import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProductsByCategory} from '../../store/catalogue/thunks'
import {selectProducts} from '../../store/catalogue/selectors'
import ProductCard from '../../components/productCard/index.new'
import {Grid} from '@mui/material'
import Container from '@mui/material/Container'
import FiltersMenu from '../../components/FiltersMenu'
import Box from '@mui/material/Box'

export default function CataloguePage() {
  const params = useParams()
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(getProductsByCategory(params.id))
  }, [dispatch, params])

  return (
    <Container maxWidth="lg" sx={{mt: '50px'}}>
      <Box sx={{m: '10px'}}>
        Parent -> category.name
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FiltersMenu categoryId={params.id}/>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={1} columns={9}>
            {products && products.map(p => (
              <Grid item xs={3} key={p.id}>
                <ProductCard product={p}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    </Container>
  )
}
