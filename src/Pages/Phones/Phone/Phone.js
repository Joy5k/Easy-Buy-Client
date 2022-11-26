import React from "react";

const Phone = ({ phone, brand, setPhoneInfo }) => {
  const {
    model,
    img,
    location,
    orignalPrice,
    usedTime,
    reselPrice,
    description,
  } = phone;
  return (
    <div>
      <div className="my-16 card w-full bg-base-100 shadow-xl border">
        <figure>
          <img className="h-96 " src={img} alt="Phones" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title">Brand: {brand}</h2>
          <p className="font-semibold">
          <span className="font-bold">Resell Price</span>: <span className="font-bold">{reselPrice}$</span>
          </p>
          <p><span className="text-primary font-bold">Model</span>: {model}</p>
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full mx-auto my-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
             Details
            </div>

            <div className="collapse-content">

            <p><span className="text-primary font-bold">Model</span>:{model}</p>
          <p><span className="font-bold">location</span>:{location}</p>
          <p><span className="font-bold">Used</span>: {usedTime} years</p>
          <p>
          <span className="font-bold">Original Price</span>: <del>{orignalPrice}</del> ${" "}
          </p>
          <p className="font-semibold">
          <span className="font-bold">Resell Price</span>: <span className="font-bold">{reselPrice}$</span>
          </p>
          <p>
            <span className="font-semibold ">Description: </span>
            {description.slice(0, 150)}...
          </p>
            </div>
          </div>

         

          <div className="card-actions justify-end">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary w-full"
              onClick={() => setPhoneInfo(phone)}
            >
              Book now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
