import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16   bg-gray-200   text-red-500">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpExHsmbJrDI27syBwFlIWYREltBUfT8Mj_xvCR4&s" alt="" />
            <p className="text-3xl">oops! Something went wrong</p>
            <Link to='/' rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded   bg-primary   text-gray-300">Back to homepage</Link>
        </div>
    </section>
    );
};

export default ErrorPage;