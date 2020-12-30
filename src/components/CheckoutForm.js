import React from "react"
import { CardElement, useStripe } from "@stripe/react-stripe-js"
import "./CheckoutForm.css"

export default function CheckoutForm() {
  const stripe = useStripe();
  
  const submitCheckout = async() => {
      const response = await fetch('/.netlify/functions/checkout', { method: "post" });
      const data = await response.json();
      console.log('Data = ',data);
  }
  
  return (
    <div>
      <CardElement />
      <div>
          <button onClick={submitCheckout}>Checkout</button>
      </div>
    </div>
  )
}
