import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const PaymentForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
      } else {
          setPaymentSuccess(paymentMethod.id);
          setPaymentError(null);
          handlePayment(paymentMethod.id)
      }
    };
  
    return (
        <div>
        <form className="form-control w-50 form-container" onSubmit={handleSubmit}>
            <CardElement />
            <button className="btn btn-info my-4" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <h3 className="text-danger mt-4 pt-5">{paymentError}</h3>
        }
        { 
            paymentSuccess && <h3 className="text-success m-5 p-5">Your payment is successful.</h3>
        }
    </div>
    );
};

export default PaymentForm;
