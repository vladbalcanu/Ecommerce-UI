import React from 'react'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import {CardContent} from '@mui/material'
import Divider from '@mui/material/Divider'

export default function FiltersMenu({categoryId}) {
  const [value, setValue] = React.useState([0, 10000])
  const handlePriceRangeChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card variant="outlined" sx={{p: '10px'}}>
      <Divider/>
      <CardContent>
        <PriceRangeFilter handlePriceRangeChange={handlePriceRangeChange} value={value}/>
      </CardContent>
      <Divider/>
      {categoryId &&
      <div>
        Category related filters
      </div>
      }
      <Divider/>
      <CardContent>
        <Button variant="contained">Apply</Button>
      </CardContent>
    </Card>
  )
}


const PriceRangeFilter = ({handlePriceRangeChange, value}) => {

  const handleChange = (event, newValue) => {
    handlePriceRangeChange(event, newValue)
  }

  return (
    <div>
      <Typography>
        Price range:
      </Typography>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        max={10000}
        step={100}
        valueLabelDisplay="auto"
        disableSwap
      />
    </div>
  )
}
