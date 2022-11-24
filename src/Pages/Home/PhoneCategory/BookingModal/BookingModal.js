import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ phoneInfo }) => {

  const { user } = useContext(AuthContext);
  // const {model,price } = phoneInfo;
  console.log(user)
  const handleSubmit = event => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const itemName = phoneInfo?.model;
    const itemPrice=phoneInfo?.reselPrice
    const phoneNumber = event.target.phoneNumber.value;
    const location = event.target.location.value;
    console.log(name,email,itemName,itemPrice,phoneNumber,location);
  }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal ">
  <form onSubmit={handleSubmit} className="modal-box relative p-8">
    <label htmlFor="booking-modal" className="btn  btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations!</h3>
            <p className="py-4">You've been selected {phoneInfo?.model } phone</p>
            <div className='grid grid-cols-1'>
            <label className="label">
                <span className="label-text">Your name</span>
              </label>
            <input type="text" defaultValue={user?.displayName} className="input input-bordered"readOnly />
            <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" defaultValue={user?.email} className="input input-bordered" readOnly/>
              <label className="label">
                <span className="label-text">Product</span>
              </label>
              <input type="text" defaultValue={phoneInfo?.model} className="input input-bordered" readOnly/>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" defaultValue={phoneInfo?.reselPrice} className="input input-bordered" readOnly/>
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
   
              <input type="text" placeholder="Enter Your phone number" name='phoneNumber' className="input input-bordered" />
              <label className="label">
                <span className="label-text">Your location</span>
              </label>
              <input type="text" placeholder="Your Location" name='location' className="input input-bordered" />
            <button className='btn my-2'>Submit</button>
  </div>
          
          </form>




</div>
        </>
    );
};

export default BookingModal;