import React from 'react';

const Phone = ({ phone,brand }) => {
    const { model, img, location, orignalPrice,
        usedTime
        , reselPrice
        , description } = phone;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border">
                <figure><img className='h-96' src={img } alt="Shoes" /></figure>
  <div className="card-body">
                    <h2 className="card-title">Brand: {brand}</h2>
                    <p>Model:{ model}</p>
                    <p>location:{ location}</p>
                    <p>Used: { usedTime} years</p>
                    <p>Original-Price: <del>{ orignalPrice}</del> $ </p>
                    <p className='font-semibold'>Resell-Price: <span className='font-bold'>{reselPrice}$</span></p>
                    <p><span className='font-semibold underline'>Description: </span>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Phone;