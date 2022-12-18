import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCategory = ({ category}) => {
  const { brand } = category;
    return (
        <div className="card card-compact w-80 mx-auto bg-base-100 shadow-xl">
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

export default PhoneCategory;