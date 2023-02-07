import React from 'react';

const AboutUs = () => {
    return (
        <div>
        <div data-aos="fade-right">
        <h4 className='text-4xl font-bold text-center text-gray-700 my-10'>About Us</h4>
            <h6 className='text-xl font-bold text-center text-gray-700 '>About The Easy-Buy.Why you need the Easy-Buy!</h6>
           </div>
          
            <div  className="hero  my-12">
                <div className="hero-content flex-col lg:flex-row">
                <div data-aos="fade-right" className='w-1/2'><img src="https://img.freepik.com/premium-vector/man-buying-new-cell-phone-seller-showing-smartphone-customer-vector-illustration-phone-store-inte_103044-1212.jpg?w=2000" className="w-full rounded-lg shadow-2xl" alt='' /></div>
    <div data-aos="fade-left" className='w-full lg:w-3/4 sm:p-8'>
      <h1 className="text-5xl font-bold">The Easy-Buy</h1>
      <p className="py-6 text-gray-700 text-xl">EasyBuy is a phone financing service. Buy Any Smartphone and Pay Later with EasyBuy Mobile Device Financing Platform. With this platform, users get to purchase mobile phones</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;