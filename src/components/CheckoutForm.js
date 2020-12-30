import React from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import "./CheckoutForm.css"

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
}

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const submitCheckout = async () => {
    const response = await fetch("/.netlify/functions/checkout", {
      method: "post",
    })
    const data = await response.json()
    console.log("Data = ", data)

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Rooshan Ahmed",
        },
      },
    })
  }

  return (
    <div>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div>
        <button onClick={submitCheckout}>Checkout</button>
      </div>
    </div>
  )
}
