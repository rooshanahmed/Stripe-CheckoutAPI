import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "../components/CheckoutForm"

const stripePromise = loadStripe("pk_test_51I3GslEnWioBjOItEgqTwSFPgdBn1Nsf1bA7wx3nOSH5ww1GDvNl3hipOrMc9ZAUbDVhFAd0HJ7WBk4JF59rJecn00lvgFgrUC")

export default function Home() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}
