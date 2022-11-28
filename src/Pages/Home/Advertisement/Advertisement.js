import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';
import AdvertiseCart from './AdvertiseCart';

const Advertisement = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [] ,isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch('https://y-dun-gamma.vercel.app/advertise?status=advertise')
          const data = await res.json();
          return data;
        }
    });
        if (isLoading) {
      return <Spinner></Spinner>
    }
    console.log(products,'get this product')
    return (
        <>
            {
                products.length>0 && <>
                    <h4 className='text-5xl font-bold text-center mb-16'>Our latest phone</h4>
                <div className="grid w-11/12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
            {
                products.map(product => <AdvertiseCart
                    key={product._id}
                    product={product}
                ></AdvertiseCart>)
          }
                    </div>
                    </>
            }
            
        </>
    );
};

export default Advertisement;