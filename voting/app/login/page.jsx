import React from 'react';
import { Label, Checkbox, Button } from 'flowbite-react';
import { useState } from 'react';
import { ethers } from 'ethers';


const Login = (props) => {
  const [walletAddress, setWalletAddress] = useState("");


  async function requestAccount() {
    console.log('Requesting account...');

  
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }


  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

   
  return (
    <div>
      <form className={`flex flex-col gap-4 ${props.color} p-6 rounded-lg`} action={props.role === 'user' ? '/election' : '/candidate'}>
        <h1 className='text-2xl flex justify-center items-center'>Login as {props.role}</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Your name" />
          </div>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className='w-[35rem] h-10 text-black rounded-none'
            required
          />
        </div>
        <div>
          <div className="">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <input id="password1" type="password" placeholder="password" className='w-[35rem] h-10 text-black ' required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>   
        </div>
        <Button type="submit" className='border-2 border-white ' onClick={requestAccount}>Connect To Metamask</Button>
        <h3>Wallet address : {walletAddress}</h3>
      </form>     
    </div>
  );
};

export default Login;
