import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhoneCategory = ({ category}) => {
  const { brand } = category;
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="card card-compact w-80 mx-auto bg-base-400 shadow-xl  my-4">
        <div className="card-body">
          <img className='w-full h-40' src={category.img} alt="" />
                <h2 className="card-title">Brand: {brand }</h2>
    <div className="card-actions justify-center">
     <Link className='w-full' to={`/phones/${category._id}`}> <button className="btn border-none text-slate-700 hover:text-white bg-gray-100 w-full">Details</button></Link>
    </div>
  </div>
</div>
    );
};
AOS.init({
})
export default PhoneCategory;