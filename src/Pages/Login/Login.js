import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../Hooks/Hooks";

const Login = () => {
  const { LoginUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || '/';
  const [email,setEmail]=useState('')
  const [token] = useToken(email);
console.log(token,'check')
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const userCategory = form.userOrSeller.value;
    const password = form.password.value;
    const userInfo = {
      email,
      role: userCategory,
    }
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true })
        setEmail(email)
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message)
        console.log(error.message);
      });
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(userInfo)
     
    })
    .then(res=>res.json())
      .then(data => {
      console.log(data)
    })
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        toast.error(error.message)
      console.log(error)
      })
   
    }
  return (
    <div className="hero w-full min-h-screen bg-base-200">
      <div className="hero-content mx-auto sm:11/12 md:w-8/12 lg:w-4/12 ">
        <form
          onSubmit={handleLogin}
          className="card  w-full  shadow-2xl bg-base-100 sm:p-3 md:p-6 lg:p-8"
        >
          <h2 className="text-4xl text-center font-semibold">Login</h2>
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
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
              />
                      </div>
                      <label className="label">
                <span className="label-text"></span>
              </label>
            <select name="userOrSeller" className="select select-bordered w-32 max-w-xs">
              <option value="user">user</option>
              <option value="seller">seller</option>
            </select>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <Link to='/signup' className="text-primary underline">Create a new Account</Link>
            <div className="divider">Sign in with social</div>
            <button onClick={handleGoogleSignIn} className="btn btn-accent">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
