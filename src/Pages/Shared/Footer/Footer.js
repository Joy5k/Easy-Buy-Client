import React from 'react';
import logo from '../Footer/Logo.png';
import { FaFacebook,FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
          <img className='h-24 w-32 rounded-md' src={logo} alt="" />
          <p>Contact us:</p>
          <p>Email:mmehedihasanjoyv@gmail.com</p>
          <p>Phone:+8801923588531</p>
          <p>Easy-Boy Industries Ltd.<br/>Providing reliable second hand phone since 2002</p>
        </div> 
        <div>
          <span className="footer-title">Social</span> 
          <div className="grid grid-flow-col gap-4">
            <a href='https://web.facebook.com/profile.php?id=100050264947375' target='_blank' ><FaFacebook className='w-9 h-9  rounded-full text-primary' ></FaFacebook></a> 
            
            <a href='https://www.linkedin.com/feed/' target='_blank'><FaLinkedin className='w-9 h-9  text-primary'></FaLinkedin></a> 

          </div>
        </div>
      </footer>
    );
};

export default Footer;