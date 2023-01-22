import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaShopify, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [bookingsPhone, setBookingPhone] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://y-dun-gamma.vercel.app/booking?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        setBookingPhone(data.data);
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          return logOutUser();
        }
      });
  }, [user.email, logOutUser]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      {bookingsPhone.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Model</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookingsPhone.map((phone, i) => (
                <tr key={i}>
                  <td>
                    <img className="w-20 h-20" src={phone?.itemImage} alt="" />
                  </td>

                  <td>{phone.model}</td>
                  <td>{phone.price}</td>
                  <td>
                    <div className="tooltip" data-tip="payment">
                    {phone.price && !phone.paid && (
                      <Link to={`/dashboard/payment/${phone._id}`}>
                        <button className="btn rounded-sm mr-1">PAY</button>
                      </Link>
                    )}
                   </div>
                    <div className="tooltip " data-tip="already paid">
                    {phone.price && phone.paid && (
                      <span className="text-blue-500">Paid</span>
                    )}
                   </div>
                  </td>
                  <td>
                  <div className="tooltip" data-tip="remove Item">
                      <button className="btn bg-transparent border-none
                    hover:bg-transparent"> <FaTrashAlt className="text-xl text-black hover:text-red-500 cursor-pointer "></FaTrashAlt></button>
                  </div>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-40">
          <span className="text-4xl">
            <FaShopify className="text-7xl text-gray-400 text-center w-full mx-auto"></FaShopify>
          </span>
          <h3 className="text-6xl font-bold text-center my-auto text-gray-400 ">
            You have no Orders
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
