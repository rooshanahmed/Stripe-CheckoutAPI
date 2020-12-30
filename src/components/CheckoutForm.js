import React from "react"
import { CardElement } from "@stripe/react-stripe-js"
import "./CheckoutForm.css"

export default function CheckoutForm() {
  return (
    <div>
      <CardElement />
    </div>
  )
}
