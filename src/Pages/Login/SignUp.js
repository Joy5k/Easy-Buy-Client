import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser, UpdateUserInfo } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    console.log(name,'my name')
    const password = form.password.value;
    const data = {
      displayName:name
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        UpdateUserInfo(data)
          .then(() => {
          navigate('/')
          })
          .catch(error => {
          toast.error(error.message)
        })
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message)
        console.log(error.message);
      });
     
  };
  return (
    <div className="hero w-full min-h-screen bg-base-200">
      <div className="hero-content mx-auto sm:11/12 md:w-8/12 lg:w-4/12 ">
        <form
          onSubmit={handleSignUp}
          className="card  w-full  shadow-2xl bg-base-100 sm:p-3 md:p-6 lg:p-8"
        >
          <h2 className="text-4xl text-center font-semibold">Sign Up</h2>
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">signUp</button>
            </div>
            <p>Already have an account? <Link to='/login' className="text-primary underline">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
