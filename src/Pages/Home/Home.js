import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SkeletonLoader from '../../components/Skeleton loader/Skeleton loader';
import AboutUs from './AboutUs/AboutUs';
import Advertisement from './Advertisement/Advertisement';
import PhoneCategory from './PhoneCategory/PhoneCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const {data:phonesCategory=[],isLoading} = useQuery({
        queryKey: ['phonesCategory'],
        queryFn: async () => {
            const res = await fetch('https://y-dun-gamma.vercel.app/category')
            const data = await res.json();
            return data
        }

    })
    if (isLoading) {
        return <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            <SkeletonLoader></SkeletonLoader>
        </div>
    }
    return (
        <div className='my-12'>
            {/* header */}
     <div data-aos="fade-left" className=" mb-12 hero " style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/man-buying-new-cell-phone-seller-showing-smartphone-customer-vector-illustration-phone-store-inte_103044-1212.jpg?w=740")` }}>
     <div className="hero-overlay bg-white bg-opacity-90"></div>          
  <div className="hero-content  p-0  flex-col lg:flex-row-reverse">
                    <div data-aos="fade-in" className='w-1/2'>
                        <img src="https://img.freepik.com/premium-vector/man-buying-new-cell-phone-seller-showing-smartphone-customer-vector-illustration-phone-store-inte_103044-1212.jpg?w=2000" className="w-full rounded-lg shadow-2xl" alt='' /></div>
     <div data-aos="fade-right" className='w-1/2'>
      <h1 className="text-5xl font-bold">Easy-Buy!</h1>
      <p className="py-6 font-semibold lg:mr-12">Here you can buy your favorite secondhand phone with cheapest price.Also You can sell your used phone</p>
    </div>
  </div>
            </div>

            <div className='text-center'>
                <h2 className=' mt-8 text-4xl font-bold text-gray-600  text-center'>Choose a Mobile Brand!</h2>
                <p className='mt-2 m-16'>From  the Phone Category below.Make sure which brand's phone you want </p>
           </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto w-10/12'>
            {
                phonesCategory.map(category => <PhoneCategory
                    key={category._id}
                    category={category}
                ></PhoneCategory>)
          }
            </div>
            <AboutUs></AboutUs>
            <Advertisement></Advertisement>
      </div>
    );
};

export default Home;