'use client';
import React, { useState } from 'react';
import Web3 from 'web3';

const Page = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [party, setParty] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const web3 = new Web3(Web3.givenProvider);
            const accounts = await web3.eth.getAccounts();
            const networkId = await web3.eth.net.getId();
            const contractAddress = 'YOUR_CONTRACT_ADDRESS';
            const contractABI = [hhh] // Your contract ABI
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            await contract.methods.addCandidate(name, age, party).send({ from: accounts[0] });

            setMessage('Candidate added successfully!');
        } catch (error) {
            setMessage('Failed to add candidate: ' + error.message);
        }
    };
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
          <form className='flex flex-col justify-center items-center p-10 gap-7' onSubmit={handleSubmit}>
    <p className='text-4xl font-bold text-blue-400'>Candidate</p>

  
    <div className="relative w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
        {imagePreviewUrl ? (
            <img src={imagePreviewUrl} alt="Candidate Image" className="object-cover w-full h-full" />
        ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 2.594.95 4.977 2.52 6.832a.832.832 0 00.027.028a.76.76 0 00.242.145l.055.02c.04.01.07.025.107.03l.03.004c.028.004.057.004.085.004l.028-.004c.037-.005.067-.02.105-.03l.053-.02a.768.768 0 00.244-.146c.008-.006.018-.01.026-.016C6.05 14.978 6 12.546 6 10c0-1.066.1-2.112.292-3.118.054-.333.157-.66.303-.978a.8.8 0 01.36-.43.78.78 0 01.553-.023c.15.053.287.143.405.264a.76.76 0 01.208.399c.045.195.07.397.07.6 0 1.655 1.345 3 3 3s3-1.345 3-3c0-.203.025-.405.07-.6a.76.76 0 01.208-.399c.118-.12.255-.21.405-.264a.78.78 0 01.553.023.8.8 0 01.36.43c.146.318.25.645.303.978.192 1.006.292 2.052.292 3.118 0 2.546-.05 4.978-.5 7.83-.08.438-.464.77-.914.77H6.414a.75.75 0 01-.53-.22L3.22 16.78a.75.75 0 01-.22-.53V3.75c0-.45.32-.83.75-.91l.1-.02c.32-.06.66-.09 1-.09h6c.35 0 .684.04 1 .12.39.09.75.31.97.64l1.38 2.07c.1.16.16.35.16.53v7c0 .45-.27.86-.68 1.03-.19.07-.38.09-.56.09H10a2 2 0 01-2-2c0-.11.02-.22.05-.32L9 11l.65-.65a.5.5 0 01.7 0l1.65 1.65c.02.02.03.03.05.04.04.02.07.05.1.07l1.73 2.6c.118.177.294.314.5.38.09.03.18.05.27.06.2.01.4-.06.56-.2.41-.3.57-.84.4-1.35l-2-6A1.99 1.99 0 0110 4a2 2 0 01-2-2z" clipRule="evenodd" />
                </svg>
            </div>
        )}
        <input type="file" id="candidateImage" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
    </div>

  
    <div className="flex flex-col w-1/2">
        <label htmlFor="candidateName" className="text-blue-400 mb-1">Candidate Name</label>
        <input type="text" id="candidateName" placeholder='name' className='h-10 bg-blue-400 rounded-md pl-2' value={name} onChange={(e) => setName(e.target.value)} required />
    </div>


    <div className="flex flex-col w-1/2">
        <label htmlFor="candidateAge" className="text-blue-400 mb-1">Candidate Age</label>
        <input type="number" id="candidateAge" placeholder='age' className='h-10 bg-blue-400 rounded-md pl-2' value={age} onChange={(e) => setAge(e.target.value)} required />
    </div>


    <div className="flex flex-col w-1/2">
        <label htmlFor="candidateParty" className="text-blue-400 mb-1">Candidate Party</label>
        <input type="text" id="candidateParty" placeholder='party' className='h-10 bg-blue-400 rounded-md pl-2' value={party} onChange={(e) => setParty(e.target.value)} required />
    </div>

    <button type="submit" className='w-1/4 h-10 bg-blue-400 rounded-md'>Submit</button>
</form>

       
        </div>
    );
}

export default Page;
