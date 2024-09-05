import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/kba.png';
import { useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";

const ViewCertificate = () => {
  const [certificate, setCertificate] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const provider = new BrowserProvider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        const instance = new Contract(CertModuleCert, abi, signer);
        const result = await instance.Certificates(id);
        console.log(`searchid: ${id}`);
        console.log(result);

        setCertificate({
          name: result[0],
          coursename: result[1],
          grade: result[2],
          date: result[3],
        });
      } catch (error) {
        console.error('Error fetching certificate:', error);
        alert('Failed to fetch certificate. Please try again.');
      }
    };

    if (id) {
      fetchCertificate(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-[1000px] h-auto bg-[#618597] text-gray-800 font-sans shadow-lg p-6 mx-4 sm:mx-8 lg:mx-auto">
        <div className="relative w-full max-w-[960px] border-4 border-[#E1E5F0] bg-[#f8f9fc] p-4 mx-auto">
          <div className="relative w-full max-w-[960px] border-2 border-[#E1E5F0] bg-white mx-auto">
            <div className="flex flex-col items-center py-6">
              <div className="text-center mb-6 mt-10">
                <h2 className="text-3xl sm:text-4xl font-bold underline" style={{ fontFamily: 'Pinyon Script, cursive' }}>
                  Certificate of Completion
                </h2>
                <h2 className="text-3xl sm:text-4xl font-bold cursive mt-10" style={{ fontFamily: 'Pinyon Script, cursive' }}>
                  Kerala Blockchain Academy
                </h2>
                <p className="text-center mt-4">
                  <img src={img1} alt="Kerala Blockchain Academy Logo" className="mx-auto w-48 h-auto" />
                </p>
              </div>

              <div className="text-center mt-6">
                <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  This is to certify that
                  <span className="text-xl sm:text-2xl font-bold underline mx-2" style={{ fontFamily: 'Pinyon Script, cursive' }}>
                    {certificate.name}
                  </span>
                  has successfully completed<br />
                  <span className="text-xl sm:text-2xl font-bold underline mx-2" style={{ fontFamily: 'Pinyon Script, cursive' }}>
                    {certificate.coursename}
                  </span><br />
                  with a grade of 
                  <span className="text-xl sm:text-2xl font-bold underline mx-2" style={{ fontFamily: 'Pinyon Script, cursive' }} >
                    {certificate.grade}
                  </span>
                </p>
              </div>
              <br/><br/><br/>
              <div className="absolute bottom-6 left-6 text-lg sm:text-xl text-gray-700" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <span className="text-xl">
                  Date: <span className="ml-1">{certificate.date}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCertificate;
