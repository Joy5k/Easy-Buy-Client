import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';


const ReportedItems = () => {
    const { data: reporteditems = [] ,refetch,isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/report?report=reported');
          const data = await res.json();
          return data;
        },
    });
 
    console.log(reporteditems, 'repoprt');
    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/myproducts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('ok');
            toast.success('successfully Deleted')
            refetch();
        })
}



    return (
        <div>
      {reporteditems.length > 0 ? (
        <div>
          <h3 className="text-4xl text-center text-gray-600 font-bold mt-8 mb-4 ">
            My All Products
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reporteditems.map((phone, i) => (
                    <tr key={i}>
                        {console.log(phone._id)}
                    <td>
                      <img className="w-20 h-20" src={phone?.img} alt="" />
                    </td>
                    <td>{phone.model}</td>
                    <td>{phone.reselPrice}</td>
                    <td>
                      <button onClick={()=>handleDeleteProduct(phone._id)}  className="btn rounded-sm mr-1">Delete</button>
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
          
          </span>
          <h3 className="text-6xl font-bold text-center my-auto text-gray-400 ">
            You have no Products added yet
          </h3>
        </div>
      )}
    </div>
    );
};

export default ReportedItems;