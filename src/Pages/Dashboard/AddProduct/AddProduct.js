import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [addproductLoading,setAddProdcutLoading]=useState(false)
  const { data: phonesCategory = [], isLoading } = useQuery({
    queryKey: ["phonesCategory"],
    queryFn: async () => {
      const res = await fetch("https://y-dun-gamma.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });
 
console.log(user.email)
const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const current = new Date();
    const time = current.toLocaleDateString("en-BD");
    const form = event.target;
    const categoryId = form.categoryId.value;
    const model = form.model.value;
    const location = form.location.value;
    const phoneNumber = form.phoneNumber.value;
    const condition = form.condition.value;
    const imgURL = form.imgURL.value;
    const price = form.price.value;
    const OriginalPrice = form.OriginalPrice.value;
    const yearsOfUsed = form.yearsOfUsed.value;
    const description = form.description.value;
    const phoneInfo = {
      categoryId: categoryId,
      model,
      location,
      orignalPrice:OriginalPrice,
      reselPrice: price,
      sellerPhoneNumber: phoneNumber,
      condition,
      img: imgURL,
      yearsOfUsed,
      description,
      role: 'seller',
      email: user.email,
      sellerName:user?.displayName,
      uploadDate:time

    }
    setAddProdcutLoading(true)
      fetch('https://y-dun-gamma.vercel.app/addPhone', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(phoneInfo)
      
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Phone added successfully');
          form.reset()
          navigate('/dashboard/myproduct')
          console.log(data);
          setAddProdcutLoading(false)
      })
  };
  if (isLoading||addproductLoading) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col w-full">
          <h3 className="text-4xl font-bold ">Add Phone</h3>
          <form
            onSubmit={handleAddProduct}
            className="card  flex-shrink-0 w-full  shadow-2xl bg-base-100"
          >
            <div className="card-body grid grid-cols-4 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Model no.</span>
                </label>
                <input
                  name="model"
                  type="text"
                  placeholder="model no."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone image URL</span>
                </label>
                <input
                  name="imgURL"
                  type="text"
                  placeholder="https://"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input
                  name="OriginalPrice"
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resell Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Mobile Number</span>
                </label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="+880"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Location</span>
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Dhaka,Barisal"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">years of used</span>
                </label>
                <input
                  name="yearsOfUsed"
                  type="text"
                  placeholder="1/2"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
              <label className="label">
                <span className="label-text">Phone Brand</span>
              </label>
              <select
                name="categoryId" className="select select-bordered w-full max-w-xs"
              >
         {phonesCategory.map((category) => (
           <option key={category._id}
            
             value={category._id}>
                    {category.brand} 
            </option>
                ))}
              </select>
           </div>
              <div>
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <select
                name="condition"
                className="select select-bordered w-full max-w-xs"
              >
                <option selected value="excellent">
                  excellent
                </option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
              <div>
              <span className="label-text">Description</span>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Bio"
                required
              ></textarea>
             </div>
            </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
