import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:5000/myproduct?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((data) => {
          setMyProducts(data.data);
        });
    }, [user.email]);
    console.log(myProducts);
    return (
        <div>
            <h3  className='text-4xl text-center font-bold mt-8 mb-4 '>My All Products</h3>
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
            {myProducts.map((phone, i) => (
              <tr key={i}>
                    {console.log('phone',phone)}
                    <td><img className="w-20 h-20" src={phone?.img} alt="" /></td>
                    <td>{phone.model }</td>
                    <td>{phone.reselPrice }</td>
                <td><button className="btn rounded-sm mr-1">Delete</button></td>
                <td></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyProducts;