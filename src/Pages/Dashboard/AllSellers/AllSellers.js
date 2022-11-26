import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [] ,refetch,isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/seller/${"seller"}`);
          const data = await res.json();
          return data;
        },
      });
    return (
        <div>
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
            {sellers.map((seller,i) => (
              <tr key={seller._id}>
                    <th>{1+i }</th>
                    <td>{seller.userName}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td>
                  <button className="btn bg-red-100 text-black">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllSellers;