import { useState } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from '../scdata/Cert.json';
import { CertModuleCert } from '../scdata/deployed_addresses.json';

function IssueCertificate() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');

  const issueCerti = async (event) => {
    event.preventDefault();
    try {
      const provider = new BrowserProvider(window.ethereum);

      
      await provider.send('eth_requestAccounts', []);

      const signer = await provider.getSigner();

      
      const instance = new Contract(CertModuleCert, abi, signer);

      
      const existingCert = await instance.Certificates(id);
      if (existingCert && existingCert.name) {
        alert('Certificate with this ID already exists. Please use a different ID.');
        return;
      }

      const tx = await instance.issue(id, name, course, grade, date);
      await tx.wait();

      console.log('Transaction successful:', tx);
      alert('Certificate issued successfully!');
    } catch (error) {
      console.error('Error issuing certificate:', error);
      alert('Failed to issue certificate. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={issueCerti}
        className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-blue-800 text-center">Issue Certificate</h2>

        <div className="space-y-2">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Certificate ID:
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Certificate ID"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Candidate Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Candidate Name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">
            Course:
          </label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="Certified Blockchain Associate">Certified Blockchain Associate</option>
            <option value="Certified Ethereum Network Administrator">Certified Ethereum Network Administrator</option>
            <option value="Certified Hyperledger Fabric Developer">Certified Hyperledger Fabric Developer</option>
            <option value="Certified Ethereum Developer">Certified Ethereum Developer</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
            Grade:
          </label>
          <select
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a grade
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="F">F</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Issue Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Issue Certificate
        </button>
      </form>
    </div>
  );
}

export default IssueCertificate;
