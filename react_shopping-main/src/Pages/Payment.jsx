import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext.jsx';
import Checkout_Form from '../components/Checkout/Checkout_Form.jsx';



const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalPrice = queryParams.get('totalPrice');

    const { isLoggedIn } = useAuth();
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {

        fetch(`${import.meta.env.VITE_APP_URL}/stripe/v1/config`)
            .then(async (response) => {
                const { publishableKey } = await response.json();
                setStripePromise(loadStripe(publishableKey));
            })
            .catch((error) => {
                console.error('Error fetching Stripe config:', error);
            });
    }, []); 

    useEffect(() => {
        if (isLoggedIn) {
            fetch(`${import.meta.env.VITE_APP_URL}/stripe/v1/create-payment-intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currency: "usd",
                    amount: 400 * 100, // convert to cents, as stripe uses the smallest currency unit
                }),
            })
                .then(async (result) => {
                    const { clientSecret } = await result.json();
                    setClientSecret(clientSecret);
                })
                .catch((error) => {
                    console.error('Error fetching client secret:', error);
                });
        } else {
            console.warn('User not authenticated. Redirect or handle accordingly.');
            navigate('/login');
        }
    }, [isLoggedIn, totalPrice]);   



    return (
        <>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <Checkout_Form amount={totalPrice}/>
                </Elements>
            )}
        </>
    );
};

export default Payment;