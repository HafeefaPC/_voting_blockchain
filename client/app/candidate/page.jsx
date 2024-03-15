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

    return (
        <div>
            <form className='flex flex-col justify-center items-center p-10 gap-7' onSubmit={handleSubmit}>
                <p className='text-4xl font-bold text-blue-400'>Candidate</p>

                <input type="text" placeholder='Candidate name' className='w-1/2 h-10 bg-blue-400 rounded-md' value={name} onChange={(e) => setName(e.target.value)} required />

                <input type="number" placeholder='Candidate age' className='w-1/2 h-10 bg-blue-400 rounded-md' value={age} onChange={(e) => setAge(e.target.value)} required />

                <input type="text" placeholder='Candidate party' className='w-1/2 h-10 bg-blue-400 rounded-md' value={party} onChange={(e) => setParty(e.target.value)} required />

                <button type="submit" className='w-1/4 h-10 bg-blue-400 rounded-md'>Submit</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

export default Page;
