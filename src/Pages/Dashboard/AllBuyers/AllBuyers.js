import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";

const AllBuyers = () => {
  const { data: buyers = [] ,refetch,isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${"buyer"}`);
      const data = await res.json();
      return data;
    },
  });
  
 const handleUserDelete = (id) => {
   fetch(`http://localhost:5000/user/${id}`,
     {
       method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
       console.log('ok');
       refetch()
     })
   console.log(id)
   toast.success('successfully Deleted Buyer')
  }

  if (isLoading) {
  return <Spinner></Spinner>
}
  
  return (
    <div>
      {
        buyers.length > 0 ? 
          
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer,i) => (
              <tr key={buyer._id}>
                    <th>{1+i }</th>
                    <td>{buyer.userName}</td>
                <td>{buyer.email}</td>
                <td>{buyer.role}</td>
                <td>
                  <button onClick={()=>handleUserDelete(buyer._id)} className="btn bg-red-100 text-black">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
          : <div className="mt-40">
          <span className="text-4xl">
            <FaUserAlt className="text-7xl text-gray-400 text-center w-full mx-auto"></FaUserAlt>
          </span>
          <h3 className="text-6xl font-bold text-center my-auto text-gray-400 ">
        No Buyers Available
          </h3>
        </div>
        }
    </div>
  );
};

export default AllBuyers;
