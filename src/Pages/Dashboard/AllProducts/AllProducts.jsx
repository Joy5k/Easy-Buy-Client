import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaShopify } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import swal from 'sweetalert';

const AllProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [] ,refetch,isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/admin/allPhone`, {
            headers: {
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
          })
           
          const data = await res.json();
          return data;
        },
    });
        if (isLoading) {
            return <Spinner></Spinner>
        }
        
        const handleDeleteProduct = id => {
            fetch(`https://y-dun-gamma.vercel.app/myproducts/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal(
                            "Deleted!",
                            "The product is successfully deleted.",
                            "warning"
                        ); 
                }
            
                console.log(data);
                refetch();
            })
      }
      const addProductInAdvertise = (id) => {
      console.log(id);
        fetch(`https://y-dun-gamma.vercel.app/advertise/${id}`, {
          method: 'PUT',
          headers: {
            'content-type':'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
              if (data.matchedCount > 0) {
                swal(
                    "Confirmed",
                    "The Phone is now Advertising on home page!",
                    "success"
                ); 
              }
        })
      }
    return (
        <div>
             <div>
      {myProducts.length > 0 ? (
        <div>
          <h3 className="text-4xl text-center font-bold mt-8 mb-4 ">
            My All Products
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th>Advertise</th>
                  <th>Delete Product</th>
                </tr>
              </thead>
              <tbody>
                {myProducts.map((phone, i) => (
                    <tr key={phone._id}>
                    <td>
                      <img className="w-20 h-20" src={phone?.img} alt="" />
                    </td>
                    <td>{phone.model}</td>
                    <td>{phone.reselPrice}</td>
                    <td>
                      <button onClick={()=>addProductInAdvertise(phone._id)} className="btn rounded-sm mr-1">Advertise</button>
                    </td>
                    <td>
                      <button onClick={()=>handleDeleteProduct(phone._id)} className="btn bg-red-700 text-white rounded-sm mr-1">Delete</button>
                     
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="mt-40">
          <span className="text-4xl">
            <FaShopify className="text-7xl text-gray-400 text-center w-full mx-auto"></FaShopify>
          </span>
          <h3 className="text-6xl font-bold text-center my-auto text-gray-400 ">
            You have no Products added yet
          </h3>
        </div>
      )}
    </div>
        </div>
    );
};

export default AllProducts;