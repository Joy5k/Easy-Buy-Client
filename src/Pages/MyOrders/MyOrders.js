import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [bookingsPhone, setBookingPhone] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/booking?email=${user.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((data) => {
        setBookingPhone(data.data);
      });
  }, [user.email]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookingsPhone.map((phone, i) => (
              <tr key={i}>
                    {console.log('phone',phone)}
                    <td><img className="w-20 h-20" src={phone?.itemImage} alt="" /></td>
                    <td>{phone.PhoneBrand }</td>
                    <td>{phone.model }</td>
                    <td>{phone.price }</td>
                <td><button className="btn rounded-sm mr-1">PAY</button><button className="btn border-none rounded-sm  bg-orange-600">X</button></td>
                <td></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
