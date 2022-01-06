import * as React from 'react'
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
import {useDispatch} from 'react-redux'
import {confirmCardPayment} from '../../store/checkout/thunks'


const steps = ['Shipping address', 'Payment details', 'Review your order']

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
  const stripe = useStripe()

  const handleSubmit = async (event) => {
    event.preventDefault()
    await dispatch(confirmCardPayment({
        stripe,
        paymentMethod: {card: cardElement},
        shippingAddress,
        billingAddress: shippingAddress
      })
    )
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
                <PaymentForm handleCardElement={handleCardElement}
                             handleError={handleError}
                />
                }
                {activeStep === 2 && <Review/>}

                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                      Back
                    </Button>
                  )}

                  {activeStep === steps.length - 1 ?
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
                      disabled={error}
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
