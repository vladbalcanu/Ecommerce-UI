import React from 'react'
import ProductCard from '../productCard/index.new'
import CategoriesMenu from '../CategoriesMenu'
import {Box} from '@mui/material'
import FiltersMenu from '../FiltersMenu'

export default function TestComponents() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'space-between',
      justifyContent: 'space-between'
    }}>
      <ComponentBox name='Categories menu'>
        <CategoriesMenu/>
      </ComponentBox>
      <ComponentBox name={'Product card'}>
        <ProductCard product={{
          name: 'HP Laptop',
          price: 1000,
          discountPrice: 800,
          isDiscountable: true,
          rating: 4,
          images: []
        }}/>
      </ComponentBox>

      <ComponentBox name={'Filters menu'}>
        <FiltersMenu/>
      </ComponentBox>
    </div>
  )
}

const ComponentBox = ({name, width = 300, children}) => {
  return (
    <Box component="span" sx={{p: '20px', border: '1px dashed grey', m: '10px'}}>
      <div style={{marginBottom: '20px'}}>
        {name}
      </div>
      <div style={{width: width}}>
        {children}
      </div>
    </Box>
  )
}
