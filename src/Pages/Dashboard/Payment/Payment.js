import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutFrom from '../../Dashboard/Dashboard/CheckoutForm'
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();
//    const navigation = useNavigation()
//    if(navigation.state === 'loading'){
//     return <Loading></Loading>
//    }
    return (
        <div>
            <h3 className="text-3xl">Payment for {booking.treatment}</h3>
            <p className='text-xl'>Please pay <strong>${booking.price}</strong> for your appointment on {booking.appointmentDate} at {booking.slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom
                    booking={booking}
                    ></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;