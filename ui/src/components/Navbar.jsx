import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
       
        <h1 className="text-2xl font-bold text-white">CertiHub</h1>

        <div className="flex space-x-2">
          <Link to="/">
            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
              Home
            </button>
          </Link>
          <Link to="/issuecertificate">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
              Issue Certificate
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
