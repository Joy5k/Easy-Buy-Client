import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_PK);
const Payment = () => {
    const phone = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state==='loading') {
        return <Spinner></Spinner>
    }
    console.log(phone)
    return (
        <div>
            <h3 className='text-4xl text-center font-bold text-gray-700'>Payment Here</h3>
            <div className='w-6/12 p-8 my-16 mx-auto  text-2xl  grid grid-cols-1 gap-4 shadow-2xl rounded-lg'>
                <img src={phone.itemImage } alt="" />
                <h2>Payment for <span className='font-bold '> {phone.PhoneBrand}</span></h2>
                <h2>Please Pay: <span className='font-bold ' >{phone.price}</span>$</h2>
         
               <div className='my-4'>
                <Elements stripe={stripePromise}>
                        <CheckoutForm
                        phone={phone}
                        />
    </Elements>
            </div>
            </div>
           
        </div>
    );
};

export default Payment;