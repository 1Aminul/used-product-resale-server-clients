import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
    const payment = useLoaderData()
    const { itemName, price } = payment

    return (
        <div>
            <h2 className="text-2xl"> Please pay <strong>{price}</strong> for <strong>{itemName}</strong></h2>
            <div className='w-96 mx-auto my-6 border-spacing-2 border-neutral border p-5 rounded-lg'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment= {payment} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;