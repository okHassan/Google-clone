import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { RiAccountCircleFill } from 'react-icons/ri'

const Header = () => {
  return (
    <div className='w-full p-5 h-[70px] '>
        <div className='flex justify-end items-center space-x-6'>
            <div className='flex space-x-3 items-center text-white'>
                <a className='cursor-pointer hover:underline' href='/'>Gmail</a>
                <a className='cursor-pointer hover:underline' href='/'>Images</a>
            </div>
            <div className='flex space-x-4 items-center'>
                <div className='w-10 h-10 bg-transparent flex justify-center items-center rounded-full hover:bg-[#2F3034]'>
                    <CgMenuGridO size={25} color='#E4E4E5' className='cursor-pointer'/>
                </div>
                <RiAccountCircleFill size={30} color='white' className='cursor-pointer'/>
            </div>    
        </div>
    </div>
  )
}

export default Header