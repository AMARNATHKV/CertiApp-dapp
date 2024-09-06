# 🏆 CertiHub: The Future of Digital Credentials

Welcome to CertiHub! 🌐 This cutting-edge decentralized application (DApp) revolutionizes how you issue and verify certificates on the blockchain. Say goodbye to counterfeit credentials and embrace trust and transparency! 🔒

---

## 🎬 Demo Video

See CertiHub in action! Click below to watch the live demo. ▶️

[![Watch the Demo](link_to_your_demo_video_thumbnail)](link_to_your_demo_video)

---

## Key Features

- 📝 **Issue Certificates**: Admins can create certificates with details like course name, grades, and issuance date.
- 🔍 **Verify Certificates**: Easily verify certificates by entering the certificate ID—anyone can access and verify!
- 🛡️ **Blockchain Security**: Leveraging the Ethereum blockchain, every certificate is immutable, tamper-proof, and secure.
- 🖌️ **User-Friendly Interface**: A modern and intuitive design powered by React and Tailwind CSS ensures a smooth experience.

---

## 🚀 Quick Start Guide

### Prerequisites

Before you start, ensure you have the following tools installed:

- 🖥 Node.js
- ⚛️ React
- 🦊 Metamask
- 💰 Ethereum wallet with testnet ETH

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/certificate-dapp.git
   cd certificate-dapp
   
2. **Install all dependencies**:

   ```bash 
   npm install

3. **Run the development server**:


   ``` bash
   npm run dev

4. **Deploy the smart contract**:

   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>

## 💡 Frontend Overview
Our DApp offers an engaging and interactive experience. Here's what you'll find:

🏠 **Home Page**: Quickly connect your Metamask wallet and search certificates by ID.

📝 **Issue Certificate Page**: Admins can issue certificates by filling out a form with necessary details like course, candidate name, and issue date.

📜 **Certificate Display**: View detailed certificate information, securely fetched from the blockchain.

### Connecting to Metamask
Ensure your Metamask wallet is connected to interact with the DApp:


    `bash
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

 ### Issuing a Certificate

Admins can issue certificates through the Issue Certificate page. Here's how the process works in the IssueCertificate component:
Input Certificate Details: Admins input the certificate ID, candidate's name, selected course, grade, and issue date.
Blockchain Interaction: The component uses Ethers.js to connect to the Ethereum blockchain. If the certificate ID already exists, the user is alerted.
Issue Certificate: The certificate is issued through a smart contract transaction, and the transaction details are logged. Successful issuance triggers a confirmation alert.

javascript code
    ```bash
   const issueCerti = async (event) => {
        event.preventDefault();
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
          const signer = provider.getSigner();
          const instance = new ethers.Contract(CertModuleCert, abi, signer);
          const existingCert = await instance.Certificates(id);
          if (existingCert && existingCert.name) {
            alert('Certificate with this ID already exists. Please use a different ID.');
            return;
          }
          const tx = await instance.issue(id, name, course, grade, date);
          await tx.wait();
          alert('Certificate issued successfully!');
        } catch (error) {
          alert('Failed to issue certificate. Please try again.');
        }
   };


## Verifying a Certificate
Anyone can verify certificates by entering the certificate ID on the Home page. Data is pulled directly and securely from the blockchain!

## 🤝 How to Contribute
We love contributions! 💡 Fork the repository, report issues, or submit pull requests. Let’s make CertiHub even better together! 🚀

## 📜 License
This project is licensed under the MIT License. View the LICENSE file for more details.

👩‍💻Happy building!🚀 Let’s reshape the future of credentials! ✨
