import React from 'react';

const Home = () => {
    return (
        <div className='my-12'>
     <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/man-buying-new-cell-phone-seller-showing-smartphone-customer-vector-illustration-phone-store-inte_103044-1212.jpg?w=740")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                
  <div className="hero-content  p-0  flex-col lg:flex-row-reverse">
    <div className='w-1/2'><img src="https://img.freepik.com/premium-vector/man-buying-new-cell-phone-seller-showing-smartphone-customer-vector-illustration-phone-store-inte_103044-1212.jpg?w=2000" className="w-full rounded-lg shadow-2xl" alt='' /></div>
     <div className='w-1/2'>
      <h1 className="text-5xl font-bold">Easy-Buy!</h1>
      <p className="py-6 font-semibold lg:mr-12">Here you can buy your favorite secondhand phone with cheapest price.Also You can sell your used phone</p>
    </div>
  </div>
</div>
      </div>
    
    );
};

export default Home;