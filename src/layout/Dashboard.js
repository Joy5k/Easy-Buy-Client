import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
               <div className="drawer drawer-mobile drawer-end">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
     <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 bg-gray-500 text-base-content">
       
       
                <li><Link to="/dashboard/myorders">My Orders</Link></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item asdf1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
            </div>
        </div>
     </div>
    )
}

export default Dashboard;