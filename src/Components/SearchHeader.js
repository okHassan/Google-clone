import React from 'react'
import logo from '../image/google.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdSettingsVoice } from 'react-icons/md'
import { CgMenuGridO } from 'react-icons/cg'
import { RiAccountCircleFill } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const SearchHeader = ({ value, changState, keyPress }) => {
  return (
    <div className='bg-[#202124] h-[95px] flex justify-between items-center border-b-[1px] border-gray-600'>
        <div className='flex items-center space-x-8 pl-14'>
            <div className='flex items-center'>
                <Link to="/">
                    <img src={logo} alt='logo' className='w-[100px] h-10' />
                </Link>
            </div>
            <div className='flex my-6'>
                <div className='w-[585px] h-[50px] rounded-full px-3 border border-[gray] flex justify-between items-center'>
                    <BiSearchAlt2 size={24} color='gray' />

                    <input type='text' onKeyPress={keyPress} onChange={e => changState(e.target.value)} value={value} className='flex-1 py-2 bg-[#202124] mx-3 text-[16px] border-none outline-none text-[white]' />
                   
                    <MdSettingsVoice size={24} color='gray' />
                </div>
            </div>
        </div>
        <div className='flex space-x-4 items-center pr-14'>
                <FiSettings size={25} color='#E4E4E5' className='cursor-pointer'/>
                <div className='w-10 h-10 bg-transparent flex justify-center items-center rounded-full hover:bg-[#2F3034]'>
                    <CgMenuGridO size={25} color='#E4E4E5' className='cursor-pointer'/>
                </div>
                <RiAccountCircleFill size={30} color='white' className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default SearchHeader