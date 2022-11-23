import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Phones = () => {
    const phones = useLoaderData();
    const products = phones.products;
    const brand = phones.brand;
    console.log(phones,'phones');
    return (
        <div>
            <div className='text-center my-4'>
                <p className='text-xl font-semibold'>Showing <span className='text-primary '> {brand} </span> categories Phones</p>
                <h2 className='text-4xl font-semibold'>Choose Your favorite Phone</h2>
                
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6'>
            {
                products.map(phone => <Phone
                    key={phone.model}
                    phone={phone}
                    brand={brand}
                ></Phone>)
            }
          </div>
          
        </div>
    );
};

export default Phones;