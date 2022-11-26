import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";

const CheckoutForm = ({ phone }) => {
    const navigate=useNavigate()
  const stripe = useStripe();
  const elements = useElements();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const {price,email,_id}=phone
    
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log(error);
    }
    else {
      setError("");
      }
      setSuccess('')
      setLoading(true)
      const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
        clientSecret,
          {
              payment_method: {
                  card:card,
                  billing_details: {
                      email:email
                  }
              }
          }
      )
      if (confirmError) {
          setError(confirmError.message)
          return
      }
      if (paymentIntent.status === 'succeeded') {
         
          const payment = {
              price,
              transactionId: paymentIntent.id,
              email,
              bookingId:_id
          }
          fetch('http://localhost:5000/payments', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
              body:JSON.stringify(payment)
          })
              .then(res => res.json())
              .then(data => {
                  if (data.insertedId) {
                    toast.success('Payment successful')
                    setTransactionId(paymentIntent.id)
                    setSuccess('payment completed')
                      navigate('/dashboard/myorders')
                }
            })
    }
    console.log(paymentIntent,'paymentIntent')
    setLoading(false)
    };
   
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm mt-4" type="submit" disabled={!stripe||!clientSecret||loading}>
        Pay
      </button>
          <p className="text-red-500 text-xl">{error}</p>
          {
              success && <div>
                  <p className="text-xl my-2">{success }</p>
                  <p className="text-xl">transactionId: <span className="font-bold">{transactionId }</span></p>
              </div>
          }
    </form>
  );
};

export default CheckoutForm;
