import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from 'react';
import "./payment.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "black" },
      "::placeholder": { color: "grey" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "green"
    }
  }
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("//localhost:8800/api/payment", {
          amount: 1000,
          id
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="paymentContainer">
        <div className="totalAmount">Total: $9999</div>
        {!success ? (
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button className="payBtn">Pay</button>
          </form>
        ) : (
          <div>
            <h2 className="h2">📥<br />Awsome bean!<br />You've successfully booked.<br />You will receive an E-mail soon.</h2>
          </div>
        )}
      </div>
      </>
    

  );
}

