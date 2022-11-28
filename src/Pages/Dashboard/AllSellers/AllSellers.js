import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner/Spinner';

const AllSellers = () => {
    const { data: sellers = [] ,isLoading,refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`https://y-dun-gamma.vercel.app/seller/${"seller"}`, {
            headers: {
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
          });
          const data = await res.json();
          return data;
        },
    });
  const handleDeleteSellers = id => {
    fetch(`https://y-dun-gamma.vercel.app/seller/${id}`, {
      method: 'DELETE', 
      headers: {
        authorization:`bearer ${localStorage.getItem('accessToken')}`
      }
    })
        .then(res => res.json())
      .then(data => {
        refetch();
          toast.success('successfully Deleted')
         
      })
  }
  if (isLoading) {
    return <Spinner></Spinner>
  }
  const handleSellerVerify = (id) => {
    fetch(`https://y-dun-gamma.vercel.app/seller/${id}`,
      {
        method: 'PUT',
  //       headers: {
  // authorization:`bearer ${localStorage.getItem('accessToken')}`          
  //   }
      })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('successfully verified')
          refetch()
        }
      })
  }
  return (
      <div>
        {
          sellers.length>0 ? 
           <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller,i) => (
              <tr key={seller._id}>
                    <th>{1+i }</th>
                    <td>{seller.userName}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td>{
                seller.verify!=="verified" ?
                  <button onClick={()=>handleSellerVerify(seller._id)}  className="btn btn-primary text-gray-300">Verify seller </button>
                    : <span>Seller verified</span>
                }
                </td>
                <td>
                  <button onClick={()=>handleDeleteSellers(seller._id)} className="btn bg-red-100 text-black">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
            :<div className="mt-40">
            <span className="text-4xl">
              <FaUserAlt className="text-7xl text-gray-400 text-center w-full mx-auto"></FaUserAlt>
            </span>
            <h3 className="text-6xl font-bold text-center my-auto text-gray-400 ">
              No Seller Available
            </h3>
          </div>
          }
        </div>
    );
};

export default AllSellers;