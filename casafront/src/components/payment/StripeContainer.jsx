import React from "react"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51NI07IFpSEgJD37LIlgZWo8HJZF8L6ji6kWgobuVUUdDQFk0lVy9bhyYZbyTEZLOh4cw0zdSci3xHQAdn2blgz4L00FXM0jGLl"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
		
	)
}


