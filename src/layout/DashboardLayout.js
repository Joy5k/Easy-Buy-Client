import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../context/AuthProvider";
import UseAdmin from "../Hooks/UseAdmin";
import UseSeller from "../Hooks/UseSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  const { user,loading } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile drawer-end">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-gray-500 text-base-content">
            <li>
              {!isSeller ? <Link to="/dashboard/myorders">My Orders</Link>:<></>}
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to='/dashboard/allbuyers'>All Buyers</Link>
                </li>
                <li>
                  <Link to='/dashboard/allsellers'> All Sellers</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to='/dashboard/addproduct'>Add A product</Link>
                </li>
                <li>
                  <Link to='/dashboard/myproduct'>My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
