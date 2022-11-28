

import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Home/PhoneCategory/BookingModal/BookingModal";
import Phone from "../Phone/Phone";


const Phones = () => {
  const products = useLoaderData();
  const [phoneInfo, setPhoneInfo] = useState(null);
  const [closeModal, setCloseModal] = useState(true);
  console.log(phoneInfo, "phones");
  return (
    <div>
      <div className="text-center my-4">
        <h2 className="text-4xl font-bold">Choose Your favorite Phone</h2>
          </div>
          
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6">
        {products.map((phone, i) => (
          <Phone
            key={i}
            phone={phone}
            setPhoneInfo={setPhoneInfo}
          ></Phone>
        ))}
      </div>
      {closeModal && (
        <BookingModal
          // brand={brand}
          phoneInfo={phoneInfo}
          setCloseModal={setCloseModal}
        ></BookingModal>
      )}
    </div>
  );
};

export default Phones;