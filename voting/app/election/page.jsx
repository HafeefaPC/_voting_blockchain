import React from 'react'

const election = () => {
  
  return (
    <div className=''>
      <form className='flex flex-col justify-center items-center p-10 gap-7' action='/voting'>
      <p className='text-4xl font-bold text-blue-400 '>Election</p>
      <select className='text-white w-1/2 h-10 bg-blue-400 rounded-md'>
        <option value="school">school leader Elections</option>
        <option value="collage">collage  Elections</option>
        <option value="party">party Elections</option> 
      </select>
      <button className='w-1/4 h-10 bg-blue-400 rounded-md' >Submit</button>
      </form>
    </div>
  )
}

export default election
