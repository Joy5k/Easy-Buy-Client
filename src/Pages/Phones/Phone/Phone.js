
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegCheckCircle} from "react-icons/fa";
import { toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Phone = ({ phone, setPhoneInfo }) => {
  const [sellerVerified, setSellerVerified]=useState('')
  
  const {
    model,
    paid,
    img,
    location,
    orignalPrice,
    yearsOfUsed,
    reselPrice,
    description,
    uploadDate,
    email,
    

  } = phone;
  console.log(phone,email,'check seller verify');
  const handleReport = id => {
    fetch(`https://y-dun-gamma.vercel.app/report/${id}`, {
      method: "put",
      headers: {
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          toast.success('Send Reported to Admin successfully.')
    
        }
        else{toast.warning('already reported this phone')}
      })
}
  useEffect(() => {
    fetch(`https://y-dun-gamma.vercel.app/sellerVerified/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data, 'got the email or seller info');
        setSellerVerified(data)
      })
  }, [email])
  return (
    <div>
      {
    !paid &&
    
      <div  data-aos="flip-up" className="my-16 card w-full bg-base-100 shadow-xl border">
        <figure>
          <img className="h-96 " src={img} alt="Phones" />
        </figure>
        <div className="card-body w-full">
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
          <p><span className="font-bold">Used</span>: {yearsOfUsed} years</p>
          <p>
          <span className="font-bold">Original Price</span>: <del>{orignalPrice}</del> ${" "}
          </p>
          <p className="font-semibold">
          <span className="font-bold">Resell Price</span>: <span className="font-bold">{reselPrice}$</span>
          </p>
          <p className="font-semibold">
          <span className="font-bold">Uploaded</span>: <span className="font-bold">{uploadDate}</span>
          </p>
          <p className="font-semibold flex">
                <span className="font-bold">Seller</span>:
                <span className="font-bold">{sellerVerified.userName}</span>
                <span className="mx-2">{sellerVerified.verify === "verified" &&
                 <FaRegCheckCircle className="text-white bg-blue-600 rounded-full mt-2"></FaRegCheckCircle>
                }
                </span>
          </p>
          <p>
            <span className="font-semibold ">Description: </span>
            {description.slice(0, 150)}...
          </p>
            </div>
          </div>

         

          <div className="card-actions grid grid-cols-2">
            <label
              className="btn bg-red-600 border-none w-full"
              onClick={() => handleReport(phone._id)}
            >
              Report to Admin
            </label>
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
    
  }
    </div>
  );
};
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

})
export default Phone;
