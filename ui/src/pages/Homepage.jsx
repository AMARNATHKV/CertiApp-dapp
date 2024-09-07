import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/certi.png';
import { BrowserProvider } from 'ethers';

const Homepage = () => {
  const provider = new BrowserProvider(window.ethereum);

  async function connectToMetamask() {
    try {
      const signer = await provider.getSigner();
      console.log('Address: ', signer.address);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  }

  const [certificateid, setCertificateid] = useState('');
  const navigate = useNavigate();

  const searchCertificate = (e) => {
    e.preventDefault();
    if (certificateid) {
      navigate(`/viewcertificate/${certificateid}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-300 to-purple-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-6 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">Certificate Dapp</h1>
        
        <button 
          onClick={connectToMetamask} 
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
        >
          Connect to MetaMask
        </button>

        <img src={Logo} alt="Scholar Logo" className="h-32 w-32 object-cover rounded-full shadow-md" />

        <form onSubmit={searchCertificate} className="flex flex-col items-center w-full space-y-4">
          <input
            type="text"
            placeholder="Enter Certificate ID"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={certificateid}
            onChange={(e) => setCertificateid(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
          >
            Search Certificate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
