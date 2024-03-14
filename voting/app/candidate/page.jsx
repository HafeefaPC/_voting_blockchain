import React from 'react'
import { Label } from 'flowbite-react';

const page = () => {
  return (
    <div>
      <form className='flex flex-col justify-center items-center p-10 gap-7 ' action=''>
        <p className='text-4xl font-bold text-blue-400 '>Candidate</p>
      
        <input type="text" placeholder='Candidate name' className='w-1/2 h-10 bg-blue-400   rounded-md' required/>
        
        <input type="text" placeholder='Candidate age' className='w-1/2 h-10 bg-blue-400 rounded-md' required />
        
        <input type="text" placeholder='Candidate party' className='w-1/2 h-10 bg-blue-400 rounded-md' required />
        
        <button className='w-1/4 h-10 bg-blue-400 rounded-md' >Submit</button>
      </form>
    </div>
  )
}

export default page
