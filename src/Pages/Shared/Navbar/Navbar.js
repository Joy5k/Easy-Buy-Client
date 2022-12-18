import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../../components/Skeleton loader/Skeleton loader";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  // here we get phoneCategories name for show on the categories in navbar
  const { data: phonesCategory = [], isLoading } = useQuery({
    queryKey: ["phonesCategory"],
    queryFn: async () => {
      const res = await fetch("https://y-dun-gamma.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <SkeletonLoader></SkeletonLoader>;
  }

  return (
    <div className="navbar bg-accent text-white rounded-sm">
      <div className="navbar-start">
        <div className="dropdown text-gray-700">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
              Category
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
              {phonesCategory.map((category) => (
                <li key={category._id}>
                  <a href={`/phones/${category._id}`}>{category.brand}</a>
                </li>
              ))}
              </ul>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
           {user ?  <Link to="/dashboard" >
           Dashboard
          </Link>:<>   </>}
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Easy-Buy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/'>Home</Link>
            
          </li>
          <li tabIndex={0}>
            <Link>
              Category
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="z-10 p-2 bg-gray-300 text-gray-700">
              {phonesCategory.map((category) => (
                <li key={category._id}>
                  <a href={`/phones/${category._id}`}>{category.brand}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
           {user ?  <Link to="/dashboard" >
           Dashboard
          </Link>:<>   </>}
          </li>
          <li>
              <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
           <Link onClick={handleLogOut} to="/" className="btn btn-primary">
            LogOut
          </Link>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
         <label htmlFor="dashboard-drawer"   tabIndex={0} className="btn drawer-button lg:hidden" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
      </div>
    </div>
  );
};

export default Navbar;
