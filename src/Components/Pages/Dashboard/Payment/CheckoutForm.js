import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ payment }) => {
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const { price, email, phone, name, itemName, } = payment;
   

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {price} ),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            setPaymentError(error.message)
        }
        else {
            setPaymentError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email,
                        phone
                    },
                },
            },
        );

        if (confirmError) {
            setPaymentError(confirmError.message)
            return;
        }
       
        if(paymentIntent.status === "succeeded"){
            setSuccess('your payment successfully complete')
            setTransactionId(paymentIntent.id)

            const paymentinfo = {
               name, email, itemName, phone, price, 
               transactionId: paymentIntent.id,
            }

            fetch(`http://localhost:5000/payments`, {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(paymentinfo)
            }).then(res=> res.json())
            .then(data=> {
                if(data.acknowledged){
                   
                    fetch(`http://localhost:5000/bookings/${payment._id}`,{
                        method: "PUT",
                        headers: {
                            "content-type" : "application/json",
                            transaction: paymentIntent.id,
                        },
                        
                    }).then(res=> res.json())
                    .then(data=> {
                        if(data.modifiedCount > 0){
                            toast.success(`your transaction is successfully`)
                            fetch(`http://localhost:5000/advertiseitem/${payment.id}`,{
                                method: 'DELETE',
                            }).then(res=> res.json())
                            .then(data=> {
                                console.log(data);
                            })
                        }
                    })
                }
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary text-base-100 mt-5'
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-error">{paymentError}</p>
            <p className='text-success'>{success}</p>
            <p className='text-success'>{transactionId}</p>
        </>
    );
};

export default CheckoutForm;
