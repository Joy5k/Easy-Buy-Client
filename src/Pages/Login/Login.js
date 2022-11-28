import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";



const Login = () => {
  const { LoginUser, signInWithGoogle } = useContext(AuthContext);
  const {user}=useContext(AuthContext)
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
    LoginUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email:user.email
        }
        fetch('https://y-dun-gamma.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body:JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('accessToken',data.token)
            console.log(data)
            navigate(from, { replace: true })
            form.reset();
          })
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        const currentUser = {
          email:user.email
        }
        fetch('https://y-dun-gamma.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          body:JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('accessToken',data.token)
            console.log(data)
          })
        navigate(from, { replace: true })
      })
      .catch(error => {
        toast.error(error.message)
      console.log(error)
      })
   
    }
  return (
    <div className="hero w-full min-h-screen bg-base-200">
      <div className="hero-content mx-auto sm:11/12 md:w-8/12 lg:w-4/12 ">
        <form onSubmit={handleLogin}
          className="card  w-full  shadow-2xl bg-base-100 sm:p-3 md:p-6 lg:p-8"
        >
          <h2 className="text-4xl text-center font-semibold">Login</h2>
          <div 
            className="card-body ">
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
              <span className="label-text text-red-500 font-semibold">{error }</span>
              </label>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <Link to='/signup' className="text-primary underline">Create a new Account</Link>
            <div className="divider">Sign in with social</div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
