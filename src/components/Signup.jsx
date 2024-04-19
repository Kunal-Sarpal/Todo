import React from 'react'

function Signup() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-200'><div className='border-2 p-3 w-60 h-72 shadow bg-white '>
        <div className='flex gap-2 mb-3'>
            <button className='p-2  border-b-2 border-zinc-300'>Login</button>
            <button className='p-2  border-b-2 border-zinc-500'>SignUp</button>
        </div>
        <input type="text" className='border-[1px] p-3 focus:outline-2 outline-blue-500 focus:border-none m-1 border-zinc-500 rounded-md'/>
        <input type="text" className='border-[1px] p-3 focus:outline-2 outline-blue-500 focus:border-none m-1 border-zinc-500 rounded-md'/>
        <input type="submit" value={"Submit"} className='mt-10 bg-blue-700 text-white p-2 px-3 rounded-md font-medium w-full flex justify-center' />
        </div></div>
  )
}

export default Signup