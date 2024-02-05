import React from 'react'

const Footer = () => {
  return (
    <div className='h-[40vh] w-full flex items-center justify-around '>
        <div className="w-[313px]">
            <h1 className=" font-bold text-[#262626] text-[40px] ">aBit</h1>
            <p>Changing the way in which creators and fans interact.</p>
        </div>
        <div className='flex'>
            <div className='h-[108px] border'></div>
            <div className='flex flex-col items-start justify-around mx-8'>
                <h1 className='font-bold'>Home</h1>
                <h1 className='font-bold'>Are you a creator ?</h1>
                <h1 className='font-bold'>Support</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer