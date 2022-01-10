import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectProductReviews} from '../../../store/product/selectors'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField'
import {Button} from '@mui/material'
import {createReview} from '../../../store/product/thunks'

export default function ProductReviews() {
  const reviews = useSelector(selectProductReviews)

  return (
    <div>
      <ReviewForm/>

      {reviews && reviews.map(r => (
        <div key={r.id} style={{marginBottom: '20px'}}>
          <Review review={r}/>
        </div>
      ))}
    </div>
  )
}

const ReviewForm = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = React.useState('');
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setReview(event.target.value);
  }

  const handleSubmit = () => {
    dispatch(createReview({review, rating}))
  }


  return (
    <Box style={{marginBottom: '50px'}}>
      <Box>
        <Rating
          name="rating"
          value={rating}
          precision={1}
          onChange={(_, value) => {
            setRating(value)
          }}
        />
      </Box>
      <Box>
        <TextField
          id="filled-basic"
          label="Type your review"
          variant="filled"
          value={review}
          onChange={handleChange}
          multiline
          rows={4}
          style={{width: '30%'}}
        />
      </Box>
      <Box>
        <Button variant={'contained'} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}


const Review = ({review}) => {
  return (
    <Box style={{fontSize: '14px', margin: '10px'}}>
      <Box style={{fontSize: '18px'}}>
        {review.user.email}
      </Box>
      <Box style={{display: 'flex', justifyContent: 'left', paddingBottom: '10px'}}>
        <Rating name="read-only" value={review.rating} readOnly size="small"/>
        <Box>
          {new Date(review.created).toLocaleString('en-US')}
        </Box>
      </Box>
      <Box>
        {review.review}
      </Box>
    </Box>
  )
}
