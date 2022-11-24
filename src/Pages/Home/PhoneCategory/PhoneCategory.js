import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCategory = ({ category }) => {
    const { brand } = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div className="card-body">
                <h2 className="card-title">Brand: {brand }</h2>
    <p> Click the Details Button and you will see the all phones of <span className='font-bold text-primary'>{brand}</span> categories </p>
    <div className="card-actions justify-end">
     <Link to={`/phones/${category._id}`}> <button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default PhoneCategory;