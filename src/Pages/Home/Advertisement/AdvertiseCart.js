import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdvertiseCart = ({ product }) => {
    const {img,reselPrice,model}=product
    return (
        <div>
                   <div data-aos="zoom-out-right" key={product._id}  className="card card-compact w-96 mx-auto bg-base-100 shadow-xl mb-5 hover:w-11/12 cursor-pointer">
                    <figure>
                        <img className='w-full h-40' src={img} alt="phone" />
                    </figure>
                <div className="card-body">
                        <h2 className="card-title">Price:{reselPrice }</h2>
                        <p><span className='font-bold'>Phone: </span>{model }</p>
                        
                    </div>
                    
              </div>
         
        </div>
    );
};
AOS.init({
})
export default AdvertiseCart;