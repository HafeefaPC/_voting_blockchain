'use client'
import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Login from './login/page'

export default function Home() {
  const [interfaceType, setInterfaceType] = useState(null);

  const handleButtonClick = (type) => {
    setInterfaceType(type);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      {interfaceType === null && (
        <>
          <Button className="bg-pink-400 w-1/2 h-10 rounded-lg" onClick={() => handleButtonClick('admin')}>Admin</Button>
          <Button className="bg-blue-400 w-1/2 h-10 rounded-lg" onClick={() => handleButtonClick('user')}>User</Button>
        </>
      )}
      {interfaceType === 'admin' && (
        <div>
          <Login role="Admin" color="bg-pink-400" />
        </div >
      )
      }
      {
        interfaceType === 'user' && (
          <div>

            <Login role="user" color="bg-blue-400" />
          </div>
        )
      }
    </div >
  );
}
