import React, { useState } from 'react'
import logo from '../image/google.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdSettingsVoice } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'



const SearchBer = () => {

    const [input, setInput] = useState('')

    let history = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value)
        
    }

    const handleClick = (e) => {
        e.preventDefault()
       {!!input && history(`/search?q=${input}`)} 
    }

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            {!!input && history(`/search?q=${input}`)} 
        }
    }

    

    return (
        <div>
            <div className='flex justify-center mt-5'>
                <img src={logo} alt='logo' className='w-[300px]' />
            </div>
            <div className='flex justify-center my-6'>
                <div className='w-[585px] h-[50px] rounded-full px-3 border border-[gray] flex justify-between items-center'>
                    <BiSearchAlt2 size={24} color='gray' />

                    <input type='text' onKeyPress={keyPress} onChange={handleChange}  className='flex-1 py-2 bg-[#202124] mx-3 text-[16px] border-none outline-none text-[white]' />
                   
                    <MdSettingsVoice size={24} color='gray' />
                </div>
            </div>
            <div className='flex justify-center space-x-6'>
                <button onClick={handleClick} className='w-[130px] h-[34px] bg-[#303134] rounded text-white'>Google Search</button>
                <button className='w-[130px] h-[34px]  text-white'>I'm Feeling Lucky</button>
            </div>
            <div className='mt-7'>
                <h1 className='flex justify-center space-x-2 text-[12px]'>
                    <span className='text-[#BDC1C6] font-serif font-bold'>Google offered in: </span> <a href='/' className='text-[#8AB4F8]'> বাংলা </a>
                </h1>
            </div>
        </div>
    )
}

export default SearchBer