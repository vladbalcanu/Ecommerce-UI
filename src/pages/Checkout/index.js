import * as React from 'react'
import {useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import AddressForm from './AddressForm'
import PaymentForm from './CardForm'
import Review from './Review'
import {Elements, useStripe} from '@stripe/react-stripe-js'
import {stripePromise} from '../../services/checkout/StripeService'
import {useDispatch, useSelector} from 'react-redux'
import {confirmCardPayment} from '../../store/checkout/thunks'
import {selectCart} from '../../store/cart/selectors'
import {selectOrderComplete} from '../../store/checkout/selectors'
import {useNavigate} from 'react-router-dom'


const steps = ['Shipping address', 'Payment']

const theme = createTheme()

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutMultiStep/>
    </Elements>
  )
}


export function CheckoutMultiStep() {
  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = React.useState(0)
  const [cardElement, setCardElement] = React.useState(null)
  const [shippingAddress, setShippingAddress] = React.useState(null)
  const [error, setError] = React.useState(false)
  const cart = useSelector(selectCart)
  const stripe = useStripe()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await dispatch(confirmCardPayment({
        stripe,
        paymentMethod: {card: cardElement},
        shippingAddress,
        billingAddress: shippingAddress,
        cart: cart
      })
    )
    navigate('/profile')
  }


  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const handleCardElement = (cardElement) => {
    setCardElement(cardElement)
  }

  const handleShippingAddress = (shippingAddress) => {
    setShippingAddress(shippingAddress)
  }

  const handleError = (error) => {
    setError(error)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container component="main" maxWidth="sm" sx={{mb: 4}}>
        <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>

                {activeStep === 0 &&
                <AddressForm shippingAddress={shippingAddress}
                             handleShippingAddress={handleShippingAddress}
                />}
                {activeStep === 1 &&
                <Box>
                  <Box sx={{mb: '20px'}}>
                    <PaymentForm handleCardElement={handleCardElement}
                                 handleError={handleError}/>
                  </Box>

                  <Review shippingAddress={shippingAddress}/>
                </Box>
                }


                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                      Back
                    </Button>
                  )}

                  {activeStep === 1 ?
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      sx={{mt: 3, ml: 1}}
                    >
                      Place order
                    </Button>
                    :
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{mt: 3, ml: 1}}
                      disabled={error && !shippingAddress}
                    >
                      Next
                    </Button>}

                </Box>

              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}
