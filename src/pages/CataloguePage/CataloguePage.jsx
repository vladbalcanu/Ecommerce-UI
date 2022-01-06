import React from 'react'
import ProductCard from '../../components/productCard/index.new'
import {Grid} from '@mui/material'
import Container from '@mui/material/Container'
import FiltersMenu from '../../components/FiltersMenu'
import Box from '@mui/material/Box'

export default function CataloguePage({products, categoryId}) {

  return (
    <Container maxWidth="lg" sx={{mt: '50px'}}>
      <Box sx={{m: '10px'}}>
        Parent -> category.name
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FiltersMenu categoryId={categoryId}/>
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
