import React, {useEffect} from 'react'
import {CardElement, useElements} from '@stripe/react-stripe-js'


export default function StripeCardForm({handleCardElement, handleError}) {
  const elements = useElements()

  useEffect(() => {
    elements.getElement(CardElement).on('change', function (event) {
      if (event.error) {
        handleError(true)
      } else {
        handleError(false)
      }
    })
  }, [elements, handleError])

  const handleChange = () => {
    handleCardElement(elements.getElement(CardElement))
  }

  return (
    <CardElement onChange={handleChange}/>
  )
}
